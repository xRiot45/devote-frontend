import api from '@/configs/api';
import type { CheckWalletAddressResponse, WalletAuthPayload, WalletAuthResponse } from '@/interfaces/auth';

export async function checkWalletAddress(walletAddress: string): Promise<CheckWalletAddressResponse> {
    const response = await api.get('/api/auth/wallet/check', {
        params: { walletAddress },
    });

    return response.data;
}

export async function loginWithWallet(payload: WalletAuthPayload): Promise<WalletAuthResponse> {
    const response = await api.post('/api/auth/wallet', payload);
    return response.data;
}
