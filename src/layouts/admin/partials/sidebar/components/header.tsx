'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import NavUser from '@/components/nav-user';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { BreadcrumbItem } from '@/types';
import { Bell } from 'lucide-react';

interface HeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs = [] }) => {
    return (
        <header className=" flex h-16 items-center  transition-colors z-50 mt-2">
            <div className="flex items-center justify-between w-full gap-4">
                <div className="flex items-center gap-4">
                    <SidebarTrigger />
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>

                {/* Kanan */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <NavUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
