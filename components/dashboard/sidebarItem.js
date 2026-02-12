import { Users, TableOfContents, ChartSpline, FolderKanban, Settings } from 'lucide-react';

 const sidebarItem = [
    {
        title: "Users",
        href: "/users",
        icon: Users
    },

    {
        title: "content",
        href: "/content",
        icon: TableOfContents
    },

    {
        title: "analytics",
        href: "/analytics",
        icon: ChartSpline
    },
    {
        title: "overview",
        href: "/overview",
        icon: FolderKanban
    },

    {
        title: "settings",
        href: "/settings",
        icon: Settings
    },

]

export default sidebarItem

