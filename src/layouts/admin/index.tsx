import type { BreadcrumbItem } from '@/types';
import Content from './partials/content';
import Shell from './partials/shell';
import SidebarAdmin from './partials/sidebar';
import Header from './partials/sidebar/components/header';

interface AdminLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({ children, breadcrumbs = [] }: AdminLayoutProps) {
    return (
        <Shell variant="sidebar">
            <SidebarAdmin />
            <Content variant="sidebar">
                <Header breadcrumbs={breadcrumbs} />
                {children}
            </Content>
        </Shell>
    );
}
