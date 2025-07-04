import { RoleEnum } from '@/enums/role';

export const roleBadgeStyleMap: Record<RoleEnum, string> = {
    [RoleEnum.ADMIN]: 'bg-blue-50 border-blue-600 text-blue-600',
    [RoleEnum.USER]: 'bg-green-50 border-green-600 text-green-600',
};

export const roleLabelMap: Record<RoleEnum, string> = {
    [RoleEnum.ADMIN]: 'Admin',
    [RoleEnum.USER]: 'User',
};

export const roleIconMap: Record<RoleEnum, string> = {
    [RoleEnum.ADMIN]: 'eos-icons:admin',
    [RoleEnum.USER]: 'mdi:account-outline',
};
