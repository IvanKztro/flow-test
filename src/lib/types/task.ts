import type { Timestamp } from 'firebase/firestore';

export interface Task {
	id: string;
	milestoneId: string;
	name: string;
	notes?: string;
	status: string;
	freelancerUid: string;
	created: Timestamp;
	updateDate?: Timestamp;
	taskType: TaskType;
	dueDate?: Timestamp | any;
	startDate?: Timestamp | any;
	endDate?: Timestamp;
	priority?: TaskPriority;
	timeEstimate?: string;
	trackTime?: string;
	tags?: string[];
	assignees?: string[];
	relationships?: any[];
	position: number;
	positionsprint: number;
	editor?: any;
	tasks?: Task[];
	parentId?: string;
	files?: FilesTask[];
	definitionDone?: any;
	urldependencies?: urlDependencies[];
	activities?: any[];
	watchers?: string[];
	checklist?: TaskChecklist[];
}
export type TaskArrayField =
	| 'tags'
	| 'assignees'
	| 'relationships'
	| 'tasks'
	| 'files'
	| 'definitionDone'
	| 'urldependencies'
	| 'activities'
	| 'watchers';

export enum TaskStatus {
	Active = 'Active',
	InProgress = 'InProgress',
	InReview = 'InReview',
	Complete = 'Complete',
	Canceled = 'Canceled',
	Paused = 'Paused'
}

export enum TaskType {
	Milestone = 'Milestone',
	Task = 'Task'
}

export enum TaskPriority {
	Urgent = 'Urgent',
	High = 'High',
	Normal = 'Normal',
	Low = 'Low'
}

export interface urlDependencies {
	createdAt: Timestamp;
	createdBy: string;
	title: string;
	description: string;
	url: string;
	imageUrl: string;
}
export interface FilesTask {
	createdAt: Timestamp;
	createdBy: string;
	fileID: string;
	fileName: string;
	fileType: string;
	url: string;
}
export interface ActivityTask {
	createdAt: Timestamp;
	createdBy: string;
	description: string;
	typeAct: string;
	replies?: any[];
	likes?: string[];
	reactions?: Object;
}

export interface TaskChecklist {
	createdAt: Timestamp;
	createdBy: string;
	name: string;
	done: boolean;
	assignees?: Assignees[];
}

export interface Assignees {
	uid: string;
	typeitem: string;
}

export type Member = {
	name: string;
	typeitem: string;
	id: string;
	displayName: string;
	email: string;
	photoURL: string | null;
};
