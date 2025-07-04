import { Badge } from '@/components/ui/badge';
import { RoleEnum } from '@/enums/role';
import { User } from '@/interfaces/users';
import { cn } from '@/lib/utils';
import { roleBadgeStyleMap, roleIconMap, roleLabelMap } from '@/utils/role-badge-style';
import { Icon } from '@iconify/react';
import { ColumnDef, Row } from '@tanstack/react-table';
import { DataTableRowActions } from './components/data-table-row-actions';

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'no',
        header: () => <span className="text-md font-medium ">No</span>,
        cell: ({ row }) => <span className="text-sm ">{row.index + 1}</span>,
        meta: {
            className: cn('p-4 ps-8'),
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'walletAddress',
        header: () => <span className="text-md font-medium ">Wallet Address</span>,
        cell: ({ row }) => (
            <span className="text-sm">
                {row.original.walletAddress.slice(0, 10) + '......' + row.original.walletAddress.slice(-6)}
            </span>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: () => <span className="text-md font-medium ">Full Name</span>,
        cell: ({ row }) => <span className="text-sm">{row.original.name}</span>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'email',
        header: () => <span className="text-md font-medium ">Email</span>,
        cell: ({ row }) => <span className="text-sm">{row.original.email}</span>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'role',
        header: () => <span className="text-md font-medium ">Role</span>,
        cell: ({ row }) => (
            <Badge
                variant="outline"
                className={cn('text-xs px-2 py-0.5 rounded-sm', roleBadgeStyleMap[row.original.role as RoleEnum])}
            >
                <Icon icon={roleIconMap[row.original.role as RoleEnum]} />
                {roleLabelMap[row.original.role as RoleEnum]}
            </Badge>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'actions',
        header: () => <span className="text-md font-medium">Actions</span>,
        cell: ({ row }) => <DataTableRowActions row={row as Row<User>} />,
        enableHiding: false,
    },
];
