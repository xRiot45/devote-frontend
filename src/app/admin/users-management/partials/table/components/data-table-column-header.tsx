import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
// import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { Icon } from '@iconify/react';
import { Column } from '@tanstack/react-table';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>;
    }

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="data-[state=open]:bg-accent -ml-3 h-8">
                        <span className="text-md font-medium text-gray-900 dark:text-gray-200">{title}</span>
                        {column.getIsSorted() === 'desc' ? (
                            <Icon icon="tabler:arrow-down" className="ml-2 h-4 w-4" />
                        ) : column.getIsSorted() === 'asc' ? (
                            <Icon icon="tabler:arrow-up" className="ml-2 h-4 w-4" />
                        ) : (
                            <Icon icon="flowbite:sort-outline" className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52 shadow-none">
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)} className="p-3 cursor-pointer">
                        <Icon icon="tabler:arrow-up" className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)} className="p-3 cursor-pointer">
                        <Icon icon="tabler:arrow-down" className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
                        Desc
                    </DropdownMenuItem>
                    {column.getCanHide() && (
                        <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => column.toggleVisibility(false)}
                                className="p-3 cursor-pointer"
                            >
                                <Icon icon="tabler:eye-off" className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
                                Hide
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
