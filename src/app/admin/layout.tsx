import AdminLayout from '@/layouts/admin';
import { Poppins } from 'next/font/google';
import '../globals.css';

const poppins = Poppins({
    variable: '--font-sans',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
    console.log('✅ Admin layout digunakan');
    return (
        <div className={`${poppins.variable} antialiased`}>
            <AdminLayout>{children}</AdminLayout>
        </div>
    );
}
