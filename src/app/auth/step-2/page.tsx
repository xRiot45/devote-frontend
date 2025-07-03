'use client';

import authStep2Image from '@/assets/images/auth/auth-step-2.png';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Stepper from '@/components/ui/stepper';
import { useWalletAuth } from '@/hooks/auth/useWalletAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const steps = [{ label: 'Name' }, { label: 'Email' }];

const validationSchema = z.object({
    email: z
        .string({ required_error: 'Email must be a string' })
        .min(1, { message: 'Email is required' })
        .email({ message: 'Format email is invalid' }),
});

export default function Step2Page() {
    const router = useRouter();
    const { mutate: loginWithWallet, isPending } = useWalletAuth();
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const form = useForm<z.infer<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = (values: z.infer<typeof validationSchema>) => {
        const walletAddress = localStorage.getItem('walletAddress');
        const name = localStorage.getItem('name');

        if (!walletAddress || !name) {
            toast.error('Wallet data & name is not available. Please return to the previous step.');
            return;
        }

        const payload = {
            walletAddress,
            name,
            email: values.email,
        };

        loginWithWallet(payload, {
            onSuccess: (data) => {
                toast.success('Success', {
                    description: 'Registration successfully!',
                });
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.removeItem('walletAddress');
                localStorage.removeItem('name');
                router.push('/');
            },
            onError: (error) => {
                toast.error('Error', {
                    description: `Registration failed: ${error.message}`,
                });
            },
        });
    };

    return (
        <main
            className="min-h-screen font-sans transition-colors duration-300
            bg-white text-black 
            dark:bg-gradient-to-br dark:from-[#0f051d] dark:via-[#1c0533] dark:to-[#120422] dark:text-white"
        >
            <section className="relative pt-32 pb-56 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
                {/* Background gradients */}
                <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0 block" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0 block" />

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
                        <Stepper steps={steps} currentStep={2} />

                        <h2 className="text-sm uppercase tracking-widest font-semibold">Step 2</h2>
                        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            Enter your{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                Email
                            </span>
                        </h1>
                        <div className="mt-4 flex items-start gap-2 text-muted-foreground text-base max-w-xl">
                            <span>We’ll use this email to contact you and verify your identity.</span>
                        </div>

                        {/* Input Form */}
                        <div className="mt-8 space-y-4 max-w-md">
                            <Form {...form}>
                                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        type="text"
                                                        placeholder="e.g johndoe@gmail.com"
                                                        {...field}
                                                        className={`py-6 text-base shadow-none ${
                                                            form.formState.errors.email
                                                                ? 'border-red-500 focus-visible:ring-red-500'
                                                                : ''
                                                        }`}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="button"
                                        size="lg"
                                        className="bg-gradient-to-r from-indigo-500 cursor-pointer to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition py-6 w-full"
                                        disabled={isPending}
                                        onClick={() => setOpenConfirmModal(true)}
                                    >
                                        {isPending ? 'Loading...' : 'Complete Registration'}
                                        <Icon
                                            icon={isPending ? 'eos-icons:loading' : 'fluent-mdl2:completed-solid'}
                                            className="ml-2"
                                        />
                                    </Button>
                                </form>
                            </Form>

                            {/* Confirmation Modal */}
                            <Dialog open={openConfirmModal} onOpenChange={setOpenConfirmModal}>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Confirm Registration</DialogTitle>
                                        <DialogDescription>
                                            Are you sure you want to complete the registration with this email?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter className="flex justify-end space-x-2">
                                        <Button variant="outline" onClick={() => setOpenConfirmModal(false)}>
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setOpenConfirmModal(false);
                                                form.handleSubmit(onSubmit)();
                                            }}
                                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700"
                                        >
                                            Yes, Confirm
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
