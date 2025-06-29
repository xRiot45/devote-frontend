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
        title: 'Dashboard',
        href: '/admin/dashboard',
    },
];

export default function DashboardPage() {
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Admin Dashboard" />
            </Head>
            <h1>Dashboard</h1>
        </div>
    );
}
