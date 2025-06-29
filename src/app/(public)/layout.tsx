import AppLayout from '@/layouts/app';
import '../globals.css';

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
