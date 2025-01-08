

import type { NavItem, } from './types/nav';
import { ChartNoAxesGantt, ChartPie, LayoutDashboard, Users } from 'lucide-svelte';


export const siteConfig = {
    title: 'Svelte Firekit Starter',
    description: 'SvelteKit starter template with Firebase',
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
    onboarding: true,
};

export const mainNav: NavItem[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Teams",
        url: "/teams",
        icon: Users,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: ChartNoAxesGantt,
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: ChartPie,
    }
]

