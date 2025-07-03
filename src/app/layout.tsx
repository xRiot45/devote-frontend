import { Web3Provider } from '@/providers/web3-provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

const poppins = Poppins({
    variable: '--font-sans',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'DeVote',
    description:
        'DeVote is a modern voting application based on Web3 technology designed to provide a transparent, secure, and non-manipulable voting system.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${poppins.variable} antialiased`}>
                <ThemeProvider>
                    <Web3Provider>
                        {children}
                        <Toaster />
                    </Web3Provider>
                </ThemeProvider>
            </body>
        </html>
    );
}
