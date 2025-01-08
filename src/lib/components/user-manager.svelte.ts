import { where } from 'firebase/firestore';
import { firekitCollection } from 'svelte-firekit';

class UserManager {
	private static instance: UserManager;
	private _usersCollection = $derived(firekitCollection<any>('users'));
	private _allusers: any[] = $derived(this._usersCollection.data ?? []);

	static getInstance(): UserManager {
		if (!UserManager.instance) {
			UserManager.instance = new UserManager();
		}
		return UserManager.instance;
	}

	get allUsers(): any[] {
		return this._allusers;
	}
}

export const userManager = UserManager.getInstance();
