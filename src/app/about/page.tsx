'use client';

import IlustrationImage from '@/assets/images/illustration.png';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Code, Server, ShieldCheck, Users, Wallet } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <section className="relative pt-32 pb-40 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
            {/* Background gradients for dark mode */}
            <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0 block" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0 block" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto space-y-16">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground">About</h2>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                        DeVote The{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            Hybrid Web3
                        </span>{' '}
                        Voting Platform
                    </h1>

                    <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground leading-8">
                        DeVote is a secure, transparent, and modern voting platform that combines the decentralization
                        of blockchain with the flexibility of traditional web technologies. We utilize a hybrid approach
                        by integrating <strong className="dark:text-white text-black">Next.js</strong> for the frontend,{' '}
                        <strong className="dark:text-white text-black">NestJS</strong> for the backend, and{' '}
                        <strong className="dark:text-white text-black">Solidity</strong> smart contracts for on-chain
                        processes.
                    </p>
                </div>

                <Separator />

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 order-2 md:order-1">
                        <h3 className="text-2xl font-semibold">Our Mission</h3>
                        <p className="text-muted-foreground leading-8">
                            We envision a future where elections are verifiable, borderless, and resistant to
                            manipulation. DeVote empowers voters with transparent technology while maintaining user
                            privacy and regulatory compliance.
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground leading-8">
                            <li>Blend on-chain transparency with off-chain efficiency</li>
                            <li>Protect voter privacy and ensure identity validation</li>
                            <li>Support real-world voting scenarios using Web3</li>
                        </ul>
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden order-1 md:order-2">
                        <Image
                            src={IlustrationImage}
                            alt="Voting illustration"
                            width={600}
                            height={400}
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center">Technology Stack</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                <Code className="w-8 h-8 text-blue-500" />
                                <h4 className="font-semibold">Next.js 15</h4>
                                <p className="text-sm text-muted-foreground">
                                    Frontend built with modern React and App Router for performance and scalability.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                <Server className="w-8 h-8 text-indigo-500" />
                                <h4 className="font-semibold">NestJS</h4>
                                <p className="text-sm text-muted-foreground">
                                    Robust backend framework using TypeScript and RESTful APIs for secure data handling.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                <Wallet className="w-8 h-8 text-purple-600" />
                                <h4 className="font-semibold">Solidity</h4>
                                <p className="text-sm text-muted-foreground">
                                    Smart contracts deployed on the blockchain to manage immutable voting records.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Why Hybrid Web3 */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold">Why a Hybrid Web3 Approach?</h3>
                    <p className="text-muted-foreground leading-8">
                        Full on-chain voting is powerful but has limitations in scalability and user experience. Our
                        hybrid architecture ensures sensitive actions like vote recording remain on-chain, while
                        identity validation and admin controls are handled securely off-chain — delivering the best of
                        both worlds.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                        <CardContent className="p-5 flex flex-col items-center text-center space-y-2">
                            <ShieldCheck className="w-6 h-6 text-green-500" />
                            <h4 className="font-semibold">Secure</h4>
                            <p className="text-sm text-muted-foreground">
                                Votes are immutable and verifiable via blockchain.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                        <CardContent className="p-5 flex flex-col items-center text-center space-y-2">
                            <Users className="w-6 h-6 text-yellow-500" />
                            <h4 className="font-semibold">Private</h4>
                            <p className="text-sm text-muted-foreground">
                                Identity is protected through off-chain validation.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                        <CardContent className="p-5 flex flex-col items-center text-center space-y-2">
                            <Wallet className="w-6 h-6 text-blue-500" />
                            <h4 className="font-semibold">Wallet Based</h4>
                            <p className="text-sm text-muted-foreground">
                                No account needed — just connect your wallet to vote.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-muted/20 dark:bg-white/5 border border-border shadow-none">
                        <CardContent className="p-5 flex flex-col items-center text-center space-y-2">
                            <Code className="w-6 h-6 text-pink-500" />
                            <h4 className="font-semibold">Open Source</h4>
                            <p className="text-sm text-muted-foreground">
                                Source code is transparent and community-driven.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
