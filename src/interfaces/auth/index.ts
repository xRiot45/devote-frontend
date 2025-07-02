export interface WalletAuthPayload {
    walletAddress?: string;
    name?: string;
    email?: string;
}

export interface WalletAuthResponse {
    accessToken: string;
    refreshToken: string;
    isNewUser: boolean;
}

export interface CheckWalletAddressResponse {
    isRegistered: boolean;
}
