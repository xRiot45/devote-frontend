'use client';

import { Sidebar } from '@/components/ui/sidebar';
import { useEffect, useState } from 'react';

interface SidebarProps {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    className?: string;
    children?: React.ReactNode;
}

export default function ClientOnlySidebar(props: SidebarProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <Sidebar {...props} />;
}
