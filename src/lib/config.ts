
import BookOpen from 'lucide-svelte/icons/book-open';
import Bot from 'lucide-svelte/icons/bot';

import Settings2 from 'lucide-svelte/icons/settings-2';
import type { NavItem, SidebarNav } from './types/nav';
import { Bell, ChartPie, Frame, LayoutPanelLeft, Logs, MessageSquareText, User } from 'lucide-svelte';


export const siteConfig = {
    title: 'Svelte Firekit Starter',
    description: 'SvelteKit starter template with Firebase',
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
    onboarding: true,
};

export const mainNav: SidebarNav[] = [
    {
        title: 'Platform',
        items: [
            {
                title: 'Dashboard',
                url: '/dashboard',
                icon: LayoutPanelLeft,

            },
            {
                title: 'Profile',
                url: '/profile',
                icon: Settings2,
            },
            {
                title: 'Posts',
                url: '/posts',
                icon: BookOpen,
                items: [
                    {
                        title: 'All Posts',
                        url: '/posts',
                    },


                ]
            },
            {
                title: 'Syncs',
                url: '/syncs',
                icon: Frame,
                items: [
                    {
                        title: 'All Syncs',
                        url: '/syncs',
                    },


                ]
            }
        ]
    },
    {
        title: 'Analytics',
        items: [
            {
                title: 'Activity',
                url: '/activity',
                icon: Bell
            },
            {
                title: 'Contact Submission',
                url: '/submissions',
                icon: Logs
            },

        ]
    },
    {
        title: 'Settings',
        items: [
            {
                title: 'General',
                url: '/settings',
                icon: Settings2
            },
            {
                title: 'Profile',
                url: '/account/profile',
                icon: User
            }
            ,
            {
                title: 'Integrations',
                url: '/account/integrations',
                icon: Bot
            },
        ]
    }
]


export const publicNav: NavItem[] = [

    {
        title: "About",
        url: "/about",
    },
    {
        title: "Features",
        url: "/features",
    },
    {
        title: "Pricing",
        url: "/pricing",
    },


];


export const applicationNav = [
    {
        name: 'Hyvconnect',
        icon: MessageSquareText
    }
]