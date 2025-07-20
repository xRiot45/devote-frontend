'use client';

import { Loader } from '@/components/ui/loader';
import VoteChart from '@/components/vote-chart';
import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { useFetchVotingResultByProposalId } from '@/hooks/voting-result/useFetchVotingResultByProposalId';
import { BreadcrumbItem } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: '#',
    },
    {
        title: 'Voting Result',
        href: '/admin/voting-results',
    },
    {
        title: 'Detail Voting Result',
        href: '#',
    },
];

export default function ShowPage() {
    const params = useParams();
    const id = Number(params.id);

    const { data: voteResponse, isPending } = useFetchVotingResultByProposalId(id);

    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <>
            <main className="p-2">{isPending ? <Loader /> : <VoteChart data={voteResponse?.data} />}</main>
        </>
    );
}
