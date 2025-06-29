import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import NavMain from './components/nav-main';
import SidebarGroupContent from './components/sidebar-group-content';
import mainNavItems from './main-nav-items';

export function SidebarAdmin() {
    return (
        <Sidebar collapsible="offcanvas" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild size="lg">
                            <div className="text-xl font-bold tracking-tight">
                                <Link
                                    href="/"
                                    className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
                                >
                                    DeVote
                                </Link>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {mainNavItems.map(({ group, items }) => (
                    <SidebarGroup key={group || 'no-group'}>
                        {group && <SidebarGroupLabel>{group}</SidebarGroupLabel>}
                        <SidebarMenu>
                            {items.map((item) =>
                                item.submenu ? (
                                    <SidebarGroupContent key={`${group}-${item.title}`} item={item} />
                                ) : (
                                    <NavMain key={`${group}-${item.title}`} items={[item]} />
                                ),
                            )}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <h1>Admin</h1>
            </SidebarFooter>
        </Sidebar>
    );
}
