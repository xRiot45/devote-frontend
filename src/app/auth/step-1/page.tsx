'use client';

import authStep1Image from '@/assets/images/auth/auth-step-1.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Stepper from '@/components/ui/stepper';
import { StepForwardIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const steps = [{ label: 'Name' }, { label: 'Email' }];

export default function AuthStep1() {
    const [name, setName] = useState('');

    const handleNext = () => {
        if (!name) return alert('Please enter your name');
        console.log('Next step with name:', name);
    };

    return (
        <main className="min-h-screen font-sans bg-white text-black dark:bg-gradient-to-br dark:from-[#0f051d] dark:via-[#1c0533] dark:to-[#120422] dark:text-white transition-colors duration-300">
            <section className="relative pt-32 pb-56 overflow-hidden px-6 bg-white text-black dark:bg-transparent dark:text-white transition-colors duration-300">
                {/* Background Gradients */}
                <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0" />

                {/* Content */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
                    {/* Illustration */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <Image
                            src={authStep1Image}
                            alt="Auth Step 1 Illustration"
                            className="w-full max-w-2xl h-auto object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="order-2 md:order-1">
                        {/* Stepper */}
                        <Stepper steps={steps} currentStep={1} />

                        {/* Heading */}
                        <h2 className="text-sm uppercase tracking-widest font-semibold">Step 1</h2>
                        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            Tell us your{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                Name
                            </span>
                        </h1>
                        <div className="mt-4 flex items-start gap-2 text-muted-foreground text-base max-w-xl">
                            <span>We’d like to know your name before continuing to the next step.</span>
                        </div>

                        {/* Input Form */}
                        <div className="mt-8 space-y-4 max-w-md">
                            <div className="space-y-2.5">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="py-6 text-base shadow-none"
                                />
                            </div>

                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-indigo-500 cursor-pointer to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition py-6 w-full"
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
