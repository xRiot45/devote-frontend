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
        title: 'Proposals Management',
        href: '/admin/proposals-management',
    },
    {
        title: 'Create Proposal',
        href: '#',
    },
];

export default function CreateProposalPage() {
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <>
            <h1>Create proposal page</h1>
        </>
    );
}
