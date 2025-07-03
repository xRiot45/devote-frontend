'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useCheckWalletAddress } from '@/hooks/auth/useCheckWalletAddress';
import { loginWithWallet } from '@/services/authService';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { LogOutIcon, WalletIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAccount, useDisconnect } from 'wagmi';

const ConnectWalletButton: React.FC = () => {
    const router = useRouter();
    const { openConnectModal } = useConnectModal();
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();

    const { mutate: checkWallet, isPending } = useCheckWalletAddress();

    const [shouldCheckWallet, setShouldCheckWallet] = useState<boolean>(false);

    useEffect(() => {
        if (shouldCheckWallet && isConnected && address) {
            checkWallet(address, {
                onSuccess: async (res) => {
                    if (res?.data.isRegistered) {
                        const result = await loginWithWallet({
                            walletAddress: address,
                        });

                        toast.success('Success', {
                            description: 'Login successfully!',
                        });

                        localStorage.setItem('accessToken', result.accessToken);
                        router.push('/');
                    } else {
                        localStorage.setItem('walletAddress', address);
                        router.push('/auth/step-1');
                    }
                },
                onError: () => {
                    disconnect();
                },
            });
        }
    }, [isConnected, address, checkWallet, disconnect, router, shouldCheckWallet]);

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            {!isConnected ? (
                <Button
                    onClick={() => {
                        setShouldCheckWallet(true);
                        openConnectModal?.();
                    }}
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all py-6 cursor-pointer"
                >
                    <WalletIcon className="w-5 h-5 mr-2" />
                    {isPending ? 'Connecting...' : 'Connect Wallet'}
                </Button>
            ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="lg" className="py-6 bg-red-500">
                                <LogOutIcon className="w-5 h-5 mr-2" />
                                Disconnect Wallet
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="dark:bg-gradient-to-br dark:from-[#0f051d] dark:via-[#1c0533] dark:to-[#120422] dark:text-white border-none">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Disconnect Wallet?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    After logging out, you will need to reconnect your wallet to make transactions.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={() => disconnect()}
                                    className="bg-red-500 text-white cursor-pointer hover:bg-red-700"
                                >
                                    Disconnect
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            )}
        </div>
    );
};

export default ConnectWalletButton;
