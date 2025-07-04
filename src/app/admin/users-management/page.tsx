'use client';

import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { BreadcrumbItem } from '@/types';
import Head from 'next/head';
import { useEffect } from 'react';

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

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <div>
            <Head>
                <title>Users Management</title>
                <meta name="description" content="Users Management" />
            </Head>
            <h1>Users Management</h1>
        </div>
    );
}
