import { StatusEnum } from '@/enums/status';

export const statusBadgeStyleMap: Record<StatusEnum, string> = {
    [StatusEnum.DRAFT]: 'bg-yellow-50 border-yellow-600 text-yellow-600',
    [StatusEnum.ACTIVE]: 'bg-green-50 border-green-600 text-green-600',
    [StatusEnum.ENDED]: 'bg-gray-50 border-gray-600 text-gray-600',
    [StatusEnum.CANCELLED]: 'bg-red-50 border-red-600 text-red-600',
};

export const statusLabelMap: Record<StatusEnum, string> = {
    [StatusEnum.DRAFT]: 'Draft',
    [StatusEnum.ACTIVE]: 'Active',
    [StatusEnum.ENDED]: 'Completed',
    [StatusEnum.CANCELLED]: 'Cancelled',
};

export const statusIconMap: Record<StatusEnum, string> = {
    [StatusEnum.DRAFT]: 'mdi:file-clock-outline',
    [StatusEnum.ACTIVE]: 'mdi:check-circle-outline',
    [StatusEnum.ENDED]: 'mdi:flag-checkered',
    [StatusEnum.CANCELLED]: 'mdi:close-circle-outline',
};
