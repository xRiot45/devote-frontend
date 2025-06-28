import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {
    BookOpenIcon,
    FingerprintIcon,
    GlobeIcon,
    Menu,
    ShieldCheckIcon,
    UsersIcon,
    WalletIcon,
    X,
} from 'lucide-react';
import Link from 'next/link';

export default function HeroWithNavbar() {
    return (
        <main className="bg-gradient-to-br from-[#0f051d] via-[#1c0533] to-[#120422] text-white min-h-screen font-sans">
            <Navbar />
            <Hero />
        </main>
    );
}

function Navbar() {
    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
    ];

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
                                <DrawerDescription className="text-sm text-slate-200 hidden">
                                    Navigation
                                </DrawerDescription>
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

function Hero() {
    return (
        <section className="relative pt-32 pb-40 overflow-hidden font-sans px-6">
            {/* Background gradients */}
            <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0" />

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
                {/* Right Illustration for mobile first (order 1 on small, order 2 on md) */}
                <div className="order-1 md:order-2 flex justify-center relative">
                    <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white/60 text-sm font-sans">
                            Web3 Voting Illustration Placeholder
                        </div>
                    </div>
                </div>

                {/* Left Content */}
                <div className="order-2 md:order-1 font-sans">
                    <h2 className="text-sm uppercase tracking-widest text-white font-semibold font-sans">
                        Welcome to DeVote
                    </h2>
                    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-sans">
                        Revolutionize Elections <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            with Web3 Voting
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 max-w-xl font-sans">
                        <strong>DeVote</strong> is a modern voting application based on Web3 technology designed to
                        provide a transparent, secure, and non-manipulable voting system.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 font-sans">
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg font-sans cursor-pointer hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 transition-all py-6"
                        >
                            <WalletIcon className="w-5 h-5 mr-2" /> Connect To Wallet
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-black hover:text-white cursor-pointer border-white/30 hover:bg-white/10 font-sans py-6"
                        >
                            <BookOpenIcon className="w-5 h-5 mr-2" />
                            Learn More
                        </Button>
                    </div>
                    <p className="mt-4 text-sm text-slate-400 font-sans">
                        No account needed — connect your Web3 wallet to start voting instantly.
                    </p>

                    {/* Features */}
                    <div id="features" className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                        <Feature
                            icon={<ShieldCheckIcon className="w-6 h-6 text-green-400" />}
                            title="Immutable & Secure"
                            description="Votes are recorded on-chain and protected from tampering."
                        />
                        <Feature
                            icon={<UsersIcon className="w-6 h-6 text-blue-400" />}
                            title="Anonymous Identity"
                            description="Voter privacy is protected with zero-knowledge proof."
                        />
                        <Feature
                            icon={<GlobeIcon className="w-6 h-6 text-yellow-400" />}
                            title="Global Participation"
                            description="Access from anywhere with only a wallet."
                        />
                        <Feature
                            icon={<FingerprintIcon className="w-6 h-6 text-pink-400" />}
                            title="One Person, One Vote"
                            description="Prevent fraud with verified identity through wallet."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex items-start gap-3 font-sans">
            {icon}
            <div>
                <p className="font-semibold font-sans">{title}</p>
                <p className="text-sm text-slate-400 font-sans">{description}</p>
            </div>
        </div>
    );
}
