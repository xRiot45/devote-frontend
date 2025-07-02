'use client';

import IlustrationImage from '@/assets/images/illustration.png';
import ConnectWalletButton from '@/components/connect-wallet-button';
import Feature from '@/components/feature';
import { Button } from '@/components/ui/button';
import { BookOpenIcon, FingerprintIcon, GlobeIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useAccount } from 'wagmi';

export default function Homepage() {
    const { address } = useAccount();

    return (
        <main>
            <Head>
                <title>Homepage</title>
                <meta
                    name="description"
                    content="Join DeVote — a blockchain-powered voting app enabling secure, anonymous, and global participation in digital elections."
                />
            </Head>
            <section className="relative pt-32 pb-40 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
                {/* Background gradients hanya untuk dark mode */}
                <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0 block" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0 block" />

                {/* Content */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
                    {/* Right Content */}
                    <div className="order-1 md:order-2 flex justify-center relative">
                        <div className="relative w-full max-w-2xl aspect-square rounded-3xl overflow-hidden">
                            <Image
                                src={IlustrationImage}
                                alt="Web3 Voting Illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-sm uppercase tracking-widest  font-semibold">Welcome to DeVote</h2>
                        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            Revolutionize Elections <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                with Web3 Voting
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                            <strong className="text-black dark:text-white">DeVote</strong> is a modern voting
                            application based on Web3 technology designed to provide a transparent, secure, and
                            non-manipulable voting system.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <ConnectWalletButton />
                            <Link href="/about">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border border-black/10 dark:border-white/30 text-black dark:text-white hover:bg-muted transition-colors py-6 shadow-none cursor-pointer"
                                >
                                    <BookOpenIcon className="w-5 h-5 mr-2" />
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground">
                            {address
                                ? `Connected to wallet ${address.slice(0, 12)}...${address.slice(-4)}`
                                : 'No account needed — connect your Web3 wallet to start voting instantly.'}
                        </p>

                        {/* Features */}
                        <div id="features" className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Feature
                                icon={<ShieldCheckIcon className="w-6 h-6 text-green-500" />}
                                title="Immutable & Secure"
                                description="Votes are recorded on-chain and protected from tampering."
                            />
                            <Feature
                                icon={<UsersIcon className="w-6 h-6 text-blue-500" />}
                                title="Semi Anonymous Identity"
                                description="User identity is verified off-chain, while votes remain private on-chain."
                            />
                            <Feature
                                icon={<GlobeIcon className="w-6 h-6 text-yellow-500" />}
                                title="Global Participation"
                                description="Access from anywhere with only a wallet."
                            />
                            <Feature
                                icon={<FingerprintIcon className="w-6 h-6 text-pink-500" />}
                                title="One Person, One Vote"
                                description="Prevent fraud with verified identity through wallet."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
