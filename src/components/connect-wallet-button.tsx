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
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { LogOutIcon, WalletIcon } from 'lucide-react';
import { useAccount, useDisconnect } from 'wagmi';

const ConnectWalletButton: React.FC = () => {
    const { openConnectModal } = useConnectModal();
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            {!isConnected ? (
                <Button
                    onClick={() => openConnectModal?.()}
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all py-6 cursor-pointer"
                >
                    <WalletIcon className="w-5 h-5 mr-2" />
                    Connect To Wallet
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
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Disconnect Wallet?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Setelah logout, kamu harus menyambungkan wallet kamu kembali untuk melakukan
                                    transaksi.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Batal</AlertDialogCancel>
                                <AlertDialogAction onClick={() => disconnect()}>Disconnect</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            )}
        </div>
    );
};

export default ConnectWalletButton;
