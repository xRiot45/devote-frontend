'use client';

import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { BreadcrumbItem } from '@/types';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: '#',
    },
    {
        title: 'Voting Results',
        href: '/admin/voting-results',
    },
];

export default function VotingResultsPage() {
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <>
            <h1>Voting result</h1>
        </>
    );
}
