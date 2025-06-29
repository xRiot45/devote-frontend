import AppLayout from '@/layouts/app';
import { Poppins } from 'next/font/google';
import '../globals.css';

const poppins = Poppins({
    variable: '--font-sans',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
