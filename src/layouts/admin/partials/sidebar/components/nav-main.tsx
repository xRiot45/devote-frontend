'use client';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    title: string;
    href: string;
    icon: string;
}

interface NavMainProps {
    items: NavItem[];
}

const NavMain: React.FC<NavMainProps> = ({ items }) => {
    const pathname = usePathname();

    return (
        <>
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        'flex items-center gap-x-3 rounded-md p-4 text-sm font-light hover:bg-gray-100 dark:hover:bg-[#2a2a2a]',
                        pathname === item.href
                            ? 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white'
                            : 'text-black dark:text-white',
                    )}
                >
                    <Icon icon={item.icon} />
                    <span className="truncate text-md">{item.title}</span>
                </Link>
            ))}
        </>
    );
};

export default NavMain;
