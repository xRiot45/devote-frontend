import { RoleEnum } from '@/enums/role';

export interface User {
    id: number;
    walletAddress: string;
    name: string;
    email: string;
    role: string | RoleEnum;
    createdAt: string;
    updatedAt: string;
}
