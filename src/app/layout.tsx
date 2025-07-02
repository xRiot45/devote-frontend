import { Web3Provider } from '@/providers/web3-provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

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
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <Web3Provider>{children}</Web3Provider>
            </body>
        </html>
    );
}
