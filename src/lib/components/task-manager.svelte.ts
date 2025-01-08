import type { AppNotification } from '$lib/types/notifications';
import type { ActivityTask, Task } from '$lib/types/task';
import { setMentionsToNotification } from '$lib/utils';
import { Timestamp } from 'firebase/firestore';
import { firekitDocMutations, firekitUser } from 'svelte-firekit';

class TaskManager {
	private static instance: TaskManager;
	private projectId: string = '';
	private milestoneId: string = '';
	setIds(pid: string, mid: string) {
		this.projectId = pid;
		this.milestoneId = mid;
	}
	haveIds() {
		return this.projectId !== '' && this.milestoneId !== '';
	}
	static getInstance(): TaskManager {
		if (!TaskManager.instance) {
			TaskManager.instance = new TaskManager();
		}
		return TaskManager.instance;
	}
	async createTask(data: Partial<Task>): Promise<any> {
		if (data.dueDate) data.dueDate = Timestamp.fromDate(data.dueDate);
		else delete data.dueDate;
		if (data.startDate) data.startDate = Timestamp.fromDate(data.startDate);
		else delete data.startDate;

		return await firekitDocMutations.add(
			`projects/${this.projectId}/milestones/${this.milestoneId}/tasks`,
			{
				...data,
				created: Timestamp.now(),
				freelancerUid: firekitUser.uid
			}
		);
	}

	async updateTask(data: Partial<Task>, taskid: string): Promise<any> {
		return await firekitDocMutations.update(
			`projects/${this.projectId}/milestones/${this.milestoneId}/tasks/${taskid}`,
			{
				...data
			}
		);
	}

	async addNewActivity(
		payload: ActivityTask,
		task: Task,
		payloadIds: { workspaceId: string; portfolioId: string; projectId: string }
	) {
		let acttemp: ActivityTask[] | [] = task?.activities || [];

		const { workspaceId, portfolioId, projectId } = payloadIds;

		if (acttemp.length === 0) acttemp = [payload];
		else acttemp = [...acttemp, payload];

		let notification: Partial<AppNotification> = {};

		notification.mentions = task.watchers;
		notification.link = `/${workspaceId}/pf/${portfolioId}/p/${projectId}/m/${task?.milestoneId}/${task?.id}`;
		this.updateTask({ activities: acttemp }, task.id);
		notification.mentions = task?.watchers || task?.watchers;

		notification.mentions = setMentionsToNotification(notification?.mentions || []);

		// if (notification.mentions && notification.mentions.length > 0)
		// 	await createNotification({
		// 		...notification,
		// 		title: `Task updates`,
		// 		typeNotification: 'link',
		// 		description: `${payload.description} on task`,
		// 		createdBy: firekitUser.uid,
		// 		readedBy: []
		// 	});
	}
}

export const taskManager = TaskManager.getInstance();
