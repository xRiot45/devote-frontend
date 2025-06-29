'use client';

import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import Content from './partials/content';
import Shell from './partials/shell';
import SidebarAdmin from './partials/sidebar';
import Header from './partials/sidebar/components/header';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { breadcrumbs } = useBreadcrumb();

    return (
        <Shell variant="sidebar">
            <SidebarAdmin />
            <Content variant="sidebar" className="px-6 md:px-4">
                <Header breadcrumbs={breadcrumbs} />
                {children}
            </Content>
        </Shell>
    );
}
