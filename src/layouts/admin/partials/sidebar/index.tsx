'use client';

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import ClientOnlySidebar from './components/client-only-sidebar';
import GroupContent from './components/group-content';
import NavMain from './components/nav-main';
import mainNavItems from './main-nav-items';

export default function SidebarAdmin() {
    return (
        <ClientOnlySidebar collapsible="offcanvas" variant="inset" className="bg-white dark:bg-black border-r">
            <SidebarHeader className="dark:bg-black">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            size="lg"
                            className="bg-transparent hover:bg-transparent dark:bg-black"
                        >
                            <div className="text-xl font-bold tracking-tight">
                                <Link
                                    href="/admin/dashboard"
                                    className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
                                >
                                    DeVote
                                </Link>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="bg-white dark:bg-black px-2 ">
                {mainNavItems.map(({ group, items }) => (
                    <SidebarGroup key={group || 'no-group'}>
                        {group && <SidebarGroupLabel>{group}</SidebarGroupLabel>}
                        <SidebarMenu className="space-y-1.5">
                            {items.map((item) =>
                                item.submenu ? (
                                    <GroupContent key={`${group}-${item.title}`} item={item} />
                                ) : (
                                    <NavMain key={`${group}-${item.title}`} items={[item]} />
                                ),
                            )}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </ClientOnlySidebar>
    );
}
