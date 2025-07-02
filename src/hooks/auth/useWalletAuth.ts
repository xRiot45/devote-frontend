import { WalletAuthPayload, WalletAuthResponse } from '@/interfaces/auth';
import { loginWithWallet } from '@/services/authService';
import { useMutation } from '@tanstack/react-query';

export const useWalletAuth = () => {
    return useMutation<WalletAuthResponse, Error, WalletAuthPayload>({
        mutationFn: loginWithWallet,
    });
};
