'use client';

import FeatureCard from '@/components/feature-card';
import { FingerprintIcon, GlobeIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <section className="relative py-32 pb-52 px-6 overflow-hidden transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
            {/* Background gradients untuk dark mode */}
            <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0 hidden dark:block" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0 hidden dark:block" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground">Features</h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                        Why Choose{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            DeVote
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover how DeVote leverages Web3 to build the future of democratic participation.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    <FeatureCard
                        icon={<ShieldCheckIcon className="w-8 h-8 text-green-500" />}
                        title="Immutable & Secure"
                        description="Votes are recorded on-chain and protected from tampering."
                    />
                    <FeatureCard
                        icon={<UsersIcon className="w-8 h-8 text-blue-500" />}
                        title="Semi Anonymous Identity"
                        description="Identity is verified off-chain while maintaining voting privacy."
                    />
                    <FeatureCard
                        icon={<GlobeIcon className="w-8 h-8 text-yellow-500" />}
                        title="Global Participation"
                        description="Access voting from anywhere in the world using your wallet."
                    />
                    <FeatureCard
                        icon={<FingerprintIcon className="w-8 h-8 text-pink-500" />}
                        title="One Person, One Vote"
                        description="Prevent fraud with identity-bound wallet verification."
                    />
                </div>
            </div>
        </section>
    );
}
