import AppLayout from '@/layouts/app';
import '../globals.css';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
