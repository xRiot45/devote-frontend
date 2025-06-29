import { BreadcrumbProvider } from '@/contexts/breadcrumb-context';
import AdminLayout from '@/layouts/admin';
import { BreadcrumbItem } from '@/types';
import { Poppins } from 'next/font/google';
import '../globals.css';

interface AdminPageLayoutProps {
    children: React.ReactElement & { props: { breadcrumbs?: BreadcrumbItem[] } };
}

const poppins = Poppins({
    variable: '--font-sans',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function AdminPageLayout({ children }: AdminPageLayoutProps) {
    return (
        <div className={`${poppins.variable} antialiased`}>
            <BreadcrumbProvider>
                <AdminLayout>{children}</AdminLayout>
            </BreadcrumbProvider>
        </div>
    );
}
