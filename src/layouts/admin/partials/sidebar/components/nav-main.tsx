import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface NavMainProps {
    items: NavItem[];
}

const NavMain: React.FC<NavMainProps> = ({ items = [] }) => {
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="px-4 py-6">
                            <Link href={item.href} prefetch className="flex min-w-0 items-center gap-x-3">
                                <Icon icon={item.icon} />
                                <span className="truncate">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
};

export default NavMain;
