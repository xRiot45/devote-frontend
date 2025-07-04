import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableToolbarProps } from '@/types/tanstack';
import { Icon } from '@iconify/react';

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-3">
                <Input
                    placeholder="Search wallet address..."
                    value={(table.getColumn('walletAddress')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('walletAddress')?.setFilterValue(event.target.value)}
                    className="h-10 rounded-md shadow-none w-[150px] lg:w-[300px]"
                />

                <Input
                    placeholder="Search name..."
                    value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
                    className="h-10 rounded-md shadow-none w-[150px] lg:w-[300px]"
                />

                <Input
                    placeholder="Search email..."
                    value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
                    className="h-10 rounded-md shadow-none w-[150px] lg:w-[300px]"
                />

                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 cursor-pointer px-2 lg:px-3"
                    >
                        Reset
                        <Icon icon={'material-symbols:close'} className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
