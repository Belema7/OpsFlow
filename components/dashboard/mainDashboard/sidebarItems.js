import { Users, TableOfContents, ChartSpline, FolderKanban, Settings } from 'lucide-react';

 const sidebarItem = [
    {
        title: "Users",
        href: "/users",
        icon: Users,
        segment: "users"
    },

    {
        title: "content",
        href: "/content",
        icon: TableOfContents,
        segment: "content"
    },

    {
        title: "analytics",
        href: "/analytics",
        icon: ChartSpline,
        segment: "analytics"
    },
    {
        title: "overview",
        href: "/overview",
        icon: FolderKanban,
        segment: "overview"
    },

    {
        title: "settings",
        href: "/settings",
        icon: Settings,
        segment: "settings"
    },

]

export default sidebarItem

