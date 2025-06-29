'use client';

import { Breadcrumbs } from '@/components/breadcrumbs';
import ThemeToggle from '@/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { BreadcrumbItem } from '@/types';
import { Bell } from 'lucide-react';

export function SidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <header className=" flex h-16 items-center px-6 md:px-4 bg-white dark:bg-black transition-colors z-50">
            <div className="flex items-center justify-between w-full gap-4">
                {/* Kiri */}
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
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatar.jpg" alt="User" />
                                    <AvatarFallback>TA</AvatarFallback>
                                </Avatar>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2">
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Thomas Alberto</p>
                                <p className="text-xs text-muted-foreground">admin@example.com</p>
                            </div>
                            <div className="mt-2 space-y-1">
                                <Button variant="ghost" className="w-full justify-start text-left">
                                    Profil Saya
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-left">
                                    Pengaturan
                                </Button>
                                <Button variant="ghost" className="w-full justify-start text-left text-red-600">
                                    Logout
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header>
    );
}
