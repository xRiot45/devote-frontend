'use client';

import authStep2Image from '@/assets/images/auth/auth-step-2.png'; // Ganti sesuai path gambar kamu
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Stepper from '@/components/ui/stepper';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

const steps = [{ label: 'Name' }, { label: 'Email' }];

export default function Step2Page() {
    const [email, setEmail] = useState('');

    const handleNext = () => {
        console.log('Email entered:', email);
        // Simpan email atau navigasi ke step 3
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
                    {/* Illustration */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <Image
                            src={authStep2Image}
                            alt="Auth Step 2 Illustration"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="order-2 md:order-1">
                        {/* Stepper */}
                        <Stepper steps={steps} currentStep={2} />

                        <h2 className="text-sm uppercase tracking-widest font-semibold">Step 2</h2>
                        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            Enter your{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                Email
                            </span>
                        </h1>
                        <div className="mt-4 flex items-start gap-2 text-muted-foreground text-base max-w-xl">
                            <span> We’ll use this email to contact you and verify your identity.</span>
                        </div>

                        {/* Input Form */}
                        <div className="mt-8 space-y-4 max-w-md">
                            <div className="space-y-2.5">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="py-6 text-base shadow-none"
                                />
                            </div>

                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-indigo-500 cursor-pointer to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition py-6 w-full"
                                onClick={handleNext}
                            >
                                Complete Registration
                                <Icon icon={'fluent-mdl2:completed-solid'} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
