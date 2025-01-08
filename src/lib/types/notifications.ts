import type { Timestamp } from 'firebase/firestore';

export interface AppNotification {
	uid: string;
	title: string;
	typeNotification: string;
	description: string;
	createdBy: string;
	createdAt: Timestamp;
	status: NotificationsStatus;
	link?: string;
	extrainfo?: string;
	mentions: string[];
	readedBy: string[];
}

export enum NotificationsStatus {
	Read = 'Read',
	Unread = 'Unread'
}
