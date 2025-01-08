import { browser } from '$app/environment';
import type { Team } from '$lib/types/team';
import type { Workspace } from '$lib/types/workspace';
import { where } from 'firebase/firestore';
import { firekitCollection, firekitDocMutations, firekitUser } from 'svelte-firekit';

class WorkspaceManager {
	private static instance: WorkspaceManager;

	private _uid = $derived(firekitUser.uid);
	private _workspacesCollection = $derived(
		firekitCollection<Workspace>('workspaces', where('createdBy', '==', this._uid))
	);
	private _teamCollection = $derived.by(() => {
		// localStorage.setItem('selectedWorkspace', id);
		// this._selectedWorkspace = this._workspaces.find((wp) => wp.id === id);
		return firekitCollection<Team>(
			'teams',
			where('id', 'in', this._selectedWorkspace?.teams || [])
		);
	});
	private _workspaces: Workspace[] = $derived(this._workspacesCollection.data ?? []);
	private _loading: boolean = $derived(this._workspacesCollection.loading);
	private _selectedWorkspace: Workspace | undefined = $state();
	// private _workspaceTeams: Team | undefined = $state();
	private _workspaceTeams: Team[] = $derived(this._teamCollection.data ?? []);

	static getInstance(): WorkspaceManager {
		if (!WorkspaceManager.instance) {
			WorkspaceManager.instance = new WorkspaceManager();
		}
		return WorkspaceManager.instance;
	}

	get workspaces(): Workspace[] {
		return this._workspaces;
	}

	get loading(): boolean {
		return this._loading;
	}

	get selectedWorkspace(): Workspace | undefined {
		return this._selectedWorkspace;
	}

	set selectedWorkspace(id: string) {
		localStorage.setItem('selectedWorkspace', id);
		this._selectedWorkspace = this._workspaces.find((wp) => wp.id === id);
	}

	get workspaceTeams(): Team | undefined | any {
		return this._workspaceTeams;
	}
	/**
	 * Create a new workspace
	 */
	async createWorkspace(data: Partial<Workspace>): Promise<any> {
		if (!this._uid) throw new Error('User must be authenticated to create workspace');

		const workspaceData: Partial<Workspace> = {
			...data,
			createdBy: this._uid
		};

		return await firekitDocMutations.add('workspaces', workspaceData);
	}
}

export const workspaceManager = WorkspaceManager.getInstance();
