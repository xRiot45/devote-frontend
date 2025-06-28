import { ReactNode } from 'react';
import Navbar from './partials/navbar';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <main
            className="min-h-screen font-sans transition-colors duration-300
        bg-white text-black 
        dark:bg-gradient-to-br dark:from-[#0f051d] dark:via-[#1c0533] dark:to-[#120422] dark:text-white"
        >
            <Navbar />
            {children}
        </main>
    );
}
