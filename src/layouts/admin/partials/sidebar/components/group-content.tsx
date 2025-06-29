'use client';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';
import { Icon } from '@iconify/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface GroupContentProps {
    item: NavItem;
}

const GroupContent: React.FC<GroupContentProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (item.submenu?.some((subItem) => pathname === subItem.href)) {
            setIsOpen(true);
        }
    }, [pathname, item.submenu]);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full items-center justify-between px-4 py-6 cursor-pointer">
                    <div className="flex min-w-0 items-center gap-x-3 px-0.5">
                        {item.icon && <Icon icon={item.icon} />}
                        <span className="truncate font-normal">{item.title}</span>
                    </div>

                    <ChevronDown className={cn('h-4 w-4 flex-shrink-0 transition-transform', isOpen && 'rotate-180')} />
                </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="ml-6">
                {item.submenu?.map((subItem) => (
                    <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                            'flex items-center gap-x-2 rounded-md px-4 py-3 text-sm font-light hover:bg-gray-100 dark:hover:bg-[#2a2a2a]',
                            pathname === subItem.href
                                ? 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white'
                                : 'text-black dark:text-white',
                        )}
                    >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gray-500 " />
                        <span className="truncate">{subItem.title}</span>
                    </Link>
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
};

export default GroupContent;
