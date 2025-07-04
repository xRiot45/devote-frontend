'use client';

import { Loader } from '@/components/ui/loader';
import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { useFetchUsers } from '@/hooks/users/useFetchUsers';
import { BreadcrumbItem } from '@/types';
import Head from 'next/head';
import { useEffect } from 'react';
import UsersManagementTable from './partials/table';
import { columns } from './partials/table/columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: '#',
    },
    {
        title: 'Users Management',
        href: '/admin/users-management',
    },
];

export default function UsersManagementPage() {
    const { setBreadcrumbs } = useBreadcrumb();
    const { data, isPending } = useFetchUsers();
    const usersData = data ?? [];

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <div>
            <Head>
                <title>Users Management</title>
                <meta name="description" content="Users Management" />
            </Head>
            <div className="mb-2 flex flex-wrap justify-between space-y-2 mt-6 p-2">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight ">Users Management</h1>
                    <p className="text-muted-foreground mt-1.5 text-[14px]">Manage and control user accounts easily.</p>
                </div>
            </div>

            <div className="p-2 mt-6">
                {isPending ? <Loader /> : <UsersManagementTable data={usersData} columns={columns} />}
            </div>
        </div>
    );
}
