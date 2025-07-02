'use client';

import authStep1Image from '@/assets/images/auth/auth-step-1.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepForwardIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Step1Page() {
    const [name, setName] = useState('');

    const handleNext = () => {
        console.log('Name entered:', name);
        // Redirect or save to context/state for next step
    };

    return (
        <main
            className="min-h-screen font-sans transition-colors duration-300
        bg-white text-black 
        dark:bg-gradient-to-br dark:from-[#0f051d] dark:via-[#1c0533] dark:to-[#120422] dark:text-white"
        >
            <section className="relative pt-32 pb-56 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
                {/* Background gradients for dark mode */}
                <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0 block" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0 block" />

                {/* Content */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
                    {/* Illustration / Optional visual */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <Image
                            src={authStep1Image}
                            alt="Auth Step 1 Illustration"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-sm uppercase tracking-widest font-semibold">Step 1</h2>
                        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            Tell us your{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                Name
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                            We’d like to know your name before continuing to the next step.
                        </p>

                        {/* Input Form */}
                        <div className="mt-8 space-y-4 max-w-md">
                            <Input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="py-6 text-base"
                            />
                            <Button
                                size="lg"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
                                onClick={handleNext}
                            >
                                Next Step
                                <StepForwardIcon className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
