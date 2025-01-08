import type { Timestamp } from "firebase/firestore";

export interface Milestone {
	id: string;
	projectId: string;
	name: string;
	description: string;
	dueDate?: Timestamp;
	startDate?: Timestamp;
	createdBy: string;
	created: Timestamp;
	status: MilestoneStatus;
	arrayStatus: ArrayStatus[];
	arraySprints?: SprintApp[];
	team?: [];
	trackTime?: string;
	timeEstimate?: string;
	color?: string;
	priority?: MilestonePriority;
	position?: number;
	//only read
	sprints?: any;
}

export enum MilestoneStatus {
	Active = 'Active',
	Archived = 'Archived',
	Hidden = 'Hidden',
	InProgress = 'InProgress',
	InReview = 'InReview',
	Complete = 'Complete',
	Canceled = 'Canceled',
	Paused = 'Paused'
}

export interface ArrayStatus {
	position: number;
	color: string;
	name: string;
	status: string;
	tasks?: any;
}

export interface SprintApp {
	id: string;
	name: string;
	position: number;
	startDate?: Timestamp;
	endDate?: Timestamp;
	tasks?: any[];
	//only read
	statuses?: any;
}

export enum MilestonePriority {
  Urgent = "Urgent",
  High = "High",
  Normal = "Normal",
  Low = "Low",
}