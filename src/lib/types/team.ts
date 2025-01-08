import type { Timestamp } from 'firebase/firestore';

export type Team = {
	id: string;
	name: string;
	description: string;
	createdAt: Timestamp;
	createdBy: string;
	members?: string[];
	role: TeamRole;
	photoURL?: string;
};

export enum TeamRole {
	Marketing = 'Marketing',
	Development = 'Development',
	Operations = 'Operations',
	Custom = 'Custom'
}
