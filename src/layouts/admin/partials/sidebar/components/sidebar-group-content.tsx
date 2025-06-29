'use client';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Icon } from '@iconify/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarGroupContentProps {
    item: NavItem;
}

const SidebarGroupContent: React.FC<SidebarGroupContentProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full items-center justify-between px-4 py-6">
                    <div className="flex min-w-0 items-center gap-x-3 px-3">
                        <Icon icon={item.icon} />
                        <span className="truncate">{item.title}</span>
                    </div>
                    <ChevronDown className={cn('h-4 w-4 flex-shrink-0 transition-transform', isOpen && 'rotate-180')} />
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-6">
                {item.submenu?.map((subItem) => (
                    <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-center gap-x-2 rounded-md px-4 py-3 text-sm font-light text-black hover:bg-gray-100 dark:text-white dark:hover:bg-[#2a2a2a]"
                    >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gray-500" />
                        <span className="truncate">{subItem.title}</span>
                    </Link>
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
};

export default SidebarGroupContent;
