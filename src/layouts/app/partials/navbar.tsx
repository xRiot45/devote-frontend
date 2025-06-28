import ThemeToggle from '@/components/theme-toggle';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { navLinks } from '@/constants/nav-links';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50  dark:bg-transparent backdrop-blur-md border-b px-6 border-black/10 dark:border-white/10  transition-colors duration-300">
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center ">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tight ">
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                        DeVote
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-200 ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative transition duration-300 ease-in-out transform hover:scale-105 hover:text-black dark:hover:text-white"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* Theme toggle (desktop) */}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu - Drawer */}
                <div className="md:hidden ">
                    <Drawer direction="right">
                        <DrawerTrigger asChild>
                            <button className="text-black dark:text-white">
                                <Menu className="w-6 h-6" />
                            </button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-white dark:bg-[#0f051d] text-black dark:text-white border-l border-black/10 dark:border-white/10 w-4/5 max-w-sm ml-auto ">
                            <DrawerHeader className="flex flex-row justify-between items-center px-6 pt-4">
                                <DrawerTitle className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                    DeVote
                                </DrawerTitle>
                                <DrawerClose asChild>
                                    <button className="text-black dark:text-white">
                                        <X className="w-6 h-6" />
                                    </button>
                                </DrawerClose>
                            </DrawerHeader>
                            <div className="flex flex-col px-6 py-6 space-y-6 text-base ">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group relative transition duration-300 ease-in-out transform hover:scale-105 hover:text-black dark:hover:text-white"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}

                                {/* Theme toggle (mobile) */}
                                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}
