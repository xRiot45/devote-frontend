import { ReactNode } from 'react';
import Navbar from './partials/navbar';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <main className="bg-gradient-to-br from-[#0f051d] via-[#1c0533] to-[#120422] text-white min-h-screen font-sans">
            <Navbar />
            {children}
        </main>
    );
}
