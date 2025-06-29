export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    group?: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon: string;
    isActive?: boolean;
    submenu?: NavItem[];
}

export interface SidebarItem {
    title: string;
    icon: string;
    submenu?: {
        title: string;
        href: string;
    }[];
}
