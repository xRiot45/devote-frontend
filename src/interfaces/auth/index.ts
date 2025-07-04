export interface WalletAuthPayload {
    walletAddress?: string;
    name?: string;
    email?: string;
}

export interface WalletAuthResponse {
    data: {
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
    };
}

export interface CheckWalletAddressResponse {
    success: boolean;
    message: string;
    data: {
        isRegistered: boolean;
    };
}
