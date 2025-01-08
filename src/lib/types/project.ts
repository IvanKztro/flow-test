import type { Timestamp } from "firebase/firestore";

export interface Project {
	id: string;
	name: string;
	description: string;
	clientUid?: string;
	serviceType?: string;
	packageLevel?: string;
	price?: number;
	dueDate?: Timestamp;
	startDate?: Timestamp;
	clientDescription?: string;
	projectStatus: ProjectStatus;
	createdBy: string;
	portfolioId: string;
	createdAt: Timestamp;
	milestones?: any;
	team?: any[];
	vision?: any;
	color?: string;
	logo?: Logo;

	objectives: string;
	// considered: string;
	risks: string;
	scope: string;
	requirements: string;
	resources: number;
}

export enum ProjectStatus {
  Active = "Active",
  Archived = "Archived",
  Hidden = "Hidden",
  InProgress = "InProgress",
  InReview = "InReview",
  Complete = "Complete",
  Canceled = "Canceled",
  Paused = "Paused",
}

export interface Logo {
  type: LogoType;
  data: any;
}

export enum LogoType {
  Icon = "Icon",
  Image = "Image",
}
