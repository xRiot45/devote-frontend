'use client';

import { Loader } from '@/components/ui/loader';
import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { useFetchDashboardSummary } from '@/hooks/dashboard/useFetchDashboardSummary';
import { BreadcrumbItem } from '@/types';
import Head from 'next/head';
import { useEffect } from 'react';
import DashboardSummary from './components/dashboard-summary';

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

    const { data: dashboardSummary, isPending } = useFetchDashboardSummary();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Admin Dashboard" />
            </Head>

            <div className="p-2 mt-6">
                {isPending ? (
                    <Loader />
                ) : dashboardSummary?.data ? (
                    <DashboardSummary data={dashboardSummary.data} />
                ) : (
                    <div>No data available</div> // or some other default message
                )}
            </div>
        </div>
    );
}
