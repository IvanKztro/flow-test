import { type Icon as IconType } from 'lucide-svelte';

export interface NavItem {
    title: string;
    url: string;
    icon?: typeof IconType;
    items?: {
        title: string;
        url: string;
    }[];
}
export interface SidebarNav {
    title: string;
    items: NavItem[];
}