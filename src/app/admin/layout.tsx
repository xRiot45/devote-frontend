import { BreadcrumbProvider } from '@/contexts/breadcrumb-context';
import AdminLayout from '@/layouts/admin';
import { BreadcrumbItem } from '@/types';
import '../globals.css';

interface AdminPageLayoutProps {
    children: React.ReactElement & { props: { breadcrumbs?: BreadcrumbItem[] } };
}

export default function AdminPageLayout({ children }: AdminPageLayoutProps) {
    return (
        <div>
            <BreadcrumbProvider>
                <AdminLayout>{children}</AdminLayout>
            </BreadcrumbProvider>
        </div>
    );
}
