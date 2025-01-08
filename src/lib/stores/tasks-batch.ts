import type Tasks from '$lib/components/app/tasks/tasks.svelte';
import type { Milestone } from '$lib/types/milestone';
import type { Task } from '$lib/types/task';
import { deleteField, doc, writeBatch } from 'firebase/firestore';
import { firebaseService } from 'svelte-firekit';
import { writable } from 'svelte/store';

export let openmodaltask = writable<boolean>(false);
export let currentTaskID = writable<Tasks | undefined>();

const firestore = firebaseService.getDbInstance();

export async function updateTasksPositionsByDragDrop(tasks: Task[], milestone: Milestone) {
	console.log('updateTasksPositionsByDragDrop');
	const batch = writeBatch(firestore);

	try {
		const processTask = (task: Task, parentPositionSprint?: number) => {
			const taskRef = doc(
				firestore,
				`projects/${milestone.projectId}/milestones/${milestone.id}/tasks/${task.id}`
			);

			const positionsprintToUse = parentPositionSprint || task.positionsprint || 1;

			const data = {
				position: task.position,
				positionsprint: positionsprintToUse,
				status: task.status,
				...(task?.parentId ? { parentId: task.parentId } : { parentId: deleteField() })
			};

			batch.update(taskRef, data);

			if (task.tasks && task.tasks.length > 0) {
				task.tasks.forEach((subtask, index) => {
					processTask(
						{
							...subtask,
							position: index + 1,
							positionsprint: positionsprintToUse
						},
						positionsprintToUse
					);
				});
			}
		};

		for (let i = 0; i < tasks.length; i++) {
			const task = {
				...tasks[i],
				position: i + 1
			};
			processTask(task);
		}

		await batch.commit();
		console.log('Batch commit successful');
	} catch (error) {
		console.log('Error in batch commit:', error);
		throw error;
	}
}
