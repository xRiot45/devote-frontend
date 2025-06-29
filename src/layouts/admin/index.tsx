import type { BreadcrumbItem } from '@/types';
import { Content } from './partials/content';
import { Shell } from './partials/shell';
import { SidebarAdmin } from './partials/sidebar/sidebar';
import { SidebarHeader } from './partials/sidebar/sidebar-header';

interface AdminLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({ children, breadcrumbs = [] }: AdminLayoutProps) {
    return (
        <Shell variant="sidebar">
            <SidebarAdmin />
            <Content variant="sidebar">
                <SidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </Content>
        </Shell>
    );
}
