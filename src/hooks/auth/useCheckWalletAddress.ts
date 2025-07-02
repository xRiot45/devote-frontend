import { CheckWalletAddressResponse } from '@/interfaces/auth';
import { checkWalletAddress } from '@/services/authService';
import { useMutation } from '@tanstack/react-query';

export const useCheckWalletAddress = () => {
    return useMutation<CheckWalletAddressResponse, Error, string>({
        mutationFn: checkWalletAddress,
    });
};
