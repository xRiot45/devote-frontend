import { Badge } from '@/components/ui/badge';
import { RoleEnum } from '@/enums/role';
import { User } from '@/interfaces/users';
import { cn } from '@/lib/utils';
import { formatDate } from '@/utils/format-date';
import { roleBadgeStyleMap, roleIconMap, roleLabelMap } from '@/utils/role-badge-style';
import { Icon } from '@iconify/react';
import { ColumnDef, Row } from '@tanstack/react-table';
import { DataTableColumnHeader } from './components/data-table-column-header';
import { DataTableRowActions } from './components/data-table-row-actions';

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'no',
        header: ({ column }) => <DataTableColumnHeader column={column} title="No" />,
        cell: ({ row }) => <span className="text-sm ">{row.index + 1}</span>,
        meta: {
            className: cn('p-4 ps-8'),
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'walletAddress',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Wallet Address" />,
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
        header: ({ column }) => <DataTableColumnHeader column={column} title="Full Name" />,
        cell: ({ row }) => <span className="text-sm">{row.original.name}</span>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'email',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
        cell: ({ row }) => <span className="text-sm">{row.original.email}</span>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'role',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
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
        id: 'created_at',
        accessorKey: 'created_at',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
        cell: ({ row }) => <span className="text-sm">{formatDate(row.original.createdAt)}</span>,
        enableHiding: true,
        enableSorting: true,
    },
    {
        id: 'updated_at',
        accessorKey: 'updated_at',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Updated At" />,
        cell: ({ row }) => <span className="text-sm">{formatDate(row.original.updatedAt)}</span>,
        enableHiding: true,
        enableSorting: true,
    },
    {
        accessorKey: 'actions',
        header: () => <span className="text-md font-medium">Actions</span>,
        cell: ({ row }) => <DataTableRowActions row={row as Row<User>} />,
        enableHiding: false,
    },
];
