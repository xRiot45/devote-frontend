'use client';

import StepCard from '@/components/step-card';
import { CheckCircleIcon, GlobeIcon, ShieldCheckIcon, StepForwardIcon, WalletIcon, ZapIcon } from 'lucide-react';

export default function HowItWorks() {
    return (
        <section className="relative pt-32 pb-72 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
            {/* Dark mode gradients */}
            <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0 block" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0 block" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground">
                        How It Works
                    </h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                        Experience Seamless Voting with{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            DeVote
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-8">
                        Learn how DeVote simplifies the election process using blockchain technology — ensuring
                        fairness, transparency, and security from start to finish.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StepCard
                        icon={<WalletIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                        title="Connect Wallet"
                        description="Users connect their Web3 wallet (e.g., MetaMask) to access the voting platform securely."
                    />
                    <StepCard
                        icon={<ShieldCheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />}
                        title="Verify Identity"
                        description="Off-chain identity verification (e.g., email, name) ensures that only eligible users can vote."
                    />
                    <StepCard
                        icon={<ZapIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />}
                        title="Vote On-chain"
                        description="Cast your vote on the blockchain. Each vote is immutable and recorded transparently."
                    />
                    <StepCard
                        icon={<GlobeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        title="Global Access"
                        description="Participate from anywhere. All you need is a wallet and internet connection."
                    />
                    <StepCard
                        icon={<CheckCircleIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
                        title="One Person, One Vote"
                        description="System ensures only one verified vote per user, preventing fraud or duplicate submissions."
                    />
                    <StepCard
                        icon={<StepForwardIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                        title="View Results"
                        description="After voting ends, results are viewable in real-time with full transparency."
                    />
                </div>
            </div>
        </section>
    );
}
