'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppearance } from '@/hooks/use-appearance';
import { Computer, MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                    {appearance === 'dark' ? (
                        <MoonIcon className="w-5 h-5  dark:text-white text-black" />
                    ) : (
                        <SunIcon className="w-5 h-5 text-black dark:text-white" />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64 text-foreground bg-background mt-4 p-2 rounded-lg">
                <DropdownMenuItem onClick={() => updateAppearance('light')} className="cursor-pointer p-3">
                    <SunIcon className="w-4 h-4 mr-2 text-black dark:text-white" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => updateAppearance('dark')} className="cursor-pointer p-3">
                    <MoonIcon className="w-4 h-4 mr-2 text-black dark:text-white" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => updateAppearance('system')} className="cursor-pointer p-3">
                    <Computer className="w-4 h-4 mr-2 text-black dark:text-white" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
