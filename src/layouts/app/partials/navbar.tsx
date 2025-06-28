import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { navLinks } from '@/constants/nav-links';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-md border-b px-6 border-white/10 font-sans">
            <div className="max-w-7xl mx-auto py-4 flex justify-between items-center font-sans">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tight font-sans">
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                        DeVote
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200 font-sans">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative transition duration-300 ease-in-out transform hover:scale-105 hover:text-white"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu - Drawer */}
                <div className="md:hidden font-sans">
                    <Drawer direction="right">
                        <DrawerTrigger asChild>
                            <button className="text-white">
                                <Menu className="w-6 h-6" />
                            </button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-[#0f051d] text-white border-l border-white/10 w-4/5 max-w-sm ml-auto font-sans">
                            <DrawerHeader className="flex flex-row justify-between items-center px-6 pt-4">
                                <DrawerTitle className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                    DeVote
                                </DrawerTitle>

                                <DrawerClose asChild>
                                    <button className="text-white">
                                        <X className="w-6 h-6" />
                                    </button>
                                </DrawerClose>
                            </DrawerHeader>
                            <div className="flex flex-col px-6 py-6 space-y-6 text-base font-sans">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group relative transition duration-300 ease-in-out transform hover:scale-105 hover:text-white"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}
