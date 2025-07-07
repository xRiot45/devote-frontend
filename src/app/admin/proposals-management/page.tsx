'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader } from '@/components/ui/loader';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BASE_URL } from '@/configs/url';
import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { StatusEnum } from '@/enums/status';
import { useDeleteProposal } from '@/hooks/proposal/useDeleteProposal';
import { useFetchProposals } from '@/hooks/proposal/useFetchProposals';
import { useUpdateStatusProposal } from '@/hooks/proposal/useUpdateStatusProposal';
import { cn } from '@/lib/utils';
import { BreadcrumbItem } from '@/types';
import { statusBadgeStyleMap, statusIconMap, statusLabelMap } from '@/utils/status-badge-style';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ConfirmStatusModal from './components/confirm-status-modal';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: '#',
    },
    {
        title: 'Proposals Management',
        href: '/admin/proposals-management',
    },
];

export default function ProposalsManagement() {
    const { setBreadcrumbs } = useBreadcrumb();
    const { data, isPending } = useFetchProposals();
    const proposalsData = data?.data?.items;
    const deleteProposal = useDeleteProposal();
    const updateStatusProposal = useUpdateStatusProposal();

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedAction, setSelectedAction] = useState<{ id: number; status: StatusEnum } | null>(null);

    const handleStatusClick = (id: number, status: StatusEnum) => {
        setSelectedAction({ id, status });
        setModalOpen(true);
    };

    const confirmStatusChange = () => {
        if (selectedAction) {
            updateStatusProposal.mutate({
                id: selectedAction.id,
                status: selectedAction.status,
            });
        }
        setModalOpen(false);
    };

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <>
            <Head>
                <title>Proposals Management</title>
                <meta name="description" content="Proposals Management" />
            </Head>
            <div className="mb-2 flex flex-wrap justify-between space-y-2 mt-6 p-2">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight ">Proposals Management</h1>
                    <p className="text-muted-foreground mt-1.5 text-[14px]">Manage and control proposals data.</p>
                </div>

                <div className="flex gap-2">
                    <Button
                        onClick={() => window.location.reload()}
                        className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
                    >
                        <span>Refresh Page</span>
                        <Icon icon={'material-symbols:refresh'} />
                    </Button>

                    <Link href={'/admin/proposals-management/create'}>
                        <Button className="bg-gradient-to-r  from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                            <span>Create Proposal</span>
                            <Icon icon={'material-symbols:event-note'} />
                        </Button>
                    </Link>
                </div>
            </div>

            {isPending ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                    {proposalsData?.map((proposal) => (
                        <div key={proposal.id}>
                            <Card className="relative bg-white/10 dark:bg-zinc-900/20 border shadow-none backdrop-blur-md hover:shadow-indigo-500/30 transition-all duration-300 rounded-2xl overflow-hidden group">
                                {/* Tombol Edit, Delete, dan Status Actions */}
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <TooltipProvider>
                                        {/* Tombol Edit */}
                                        {proposal.status === StatusEnum.DRAFT && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Link href={`/admin/proposals-management/${proposal.id}/edit`}>
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="hover:bg-indigo-100 dark:hover:bg-zinc-800 cursor-pointer"
                                                        >
                                                            <Icon
                                                                icon="lucide:edit"
                                                                className="w-4 h-4 text-indigo-600"
                                                            />
                                                        </Button>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>Edit Proposal</TooltipContent>
                                            </Tooltip>
                                        )}

                                        {/* Tombol Delete */}
                                        {proposal.status === StatusEnum.DRAFT && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="hover:bg-red-100 dark:hover:bg-zinc-800 cursor-pointer"
                                                        onClick={() => deleteProposal.mutate(Number(proposal.id))}
                                                    >
                                                        <Icon icon="lucide:trash-2" className="w-4 h-4 text-red-500" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>Delete Proposal</TooltipContent>
                                            </Tooltip>
                                        )}

                                        {/* Tombol Publish */}
                                        {proposal.status === StatusEnum.DRAFT && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="hover:bg-green-100 dark:hover:bg-zinc-800 cursor-pointer"
                                                        onClick={() =>
                                                            handleStatusClick(proposal.id, StatusEnum.ACTIVE)
                                                        }
                                                    >
                                                        <Icon icon="lucide:rocket" className="w-4 h-4 text-green-500" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>Publish</TooltipContent>
                                            </Tooltip>
                                        )}

                                        {/* Tombol End */}
                                        {proposal.status === StatusEnum.ACTIVE && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="hover:bg-yellow-100 dark:hover:bg-zinc-800 cursor-pointer"
                                                        onClick={() => handleStatusClick(proposal.id, StatusEnum.ENDED)}
                                                    >
                                                        <Icon icon="lucide:flag" className="w-4 h-4 text-yellow-500" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>End Proposal</TooltipContent>
                                            </Tooltip>
                                        )}

                                        {/* Tombol Cancel */}
                                        {(proposal.status === StatusEnum.DRAFT ||
                                            proposal.status === StatusEnum.ACTIVE) && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="hover:bg-gray-200 dark:hover:bg-zinc-800 cursor-pointer"
                                                        onClick={() =>
                                                            handleStatusClick(proposal.id, StatusEnum.CANCELLED)
                                                        }
                                                    >
                                                        <Icon
                                                            icon="lucide:x-circle"
                                                            className="w-4 h-4 text-gray-500"
                                                        />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>Cancel Proposal</TooltipContent>
                                            </Tooltip>
                                        )}
                                    </TooltipProvider>
                                </div>

                                <CardContent className="p-6 space-y-6 mt-4">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-8">
                                        <Badge className="capitalize text-xs px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-none">
                                            {proposal.category}
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                'text-xs px-2 py-0.5 rounded-full',
                                                statusBadgeStyleMap[proposal.status as StatusEnum],
                                            )}
                                        >
                                            <Icon icon={statusIconMap[proposal.status as StatusEnum]} />
                                            {statusLabelMap[proposal.status as StatusEnum]}
                                        </Badge>
                                    </div>

                                    {/* Title */}
                                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                        {proposal.title}
                                    </span>

                                    {/* Metadata */}
                                    <div className="text-muted-foreground space-y-3.5 mt-4">
                                        <p className="text-sm flex">
                                            <Icon
                                                icon="ant-design:calendar-outlined"
                                                className="mr-3 h-4 w-4 dark:text-white"
                                            />{' '}
                                            {new Date(proposal.startTime).toLocaleString()} –{' '}
                                            {new Date(proposal.endTime).toLocaleString()}
                                        </p>

                                        <p className="text-sm flex">
                                            <Icon icon="lucide:user-pen" className="dark:text-white mr-3 h-4 w-4" />{' '}
                                            <span>
                                                {proposal.creatorWallet.slice(0, 14)}...
                                                {proposal.creatorWallet.slice(-4)}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Candidates */}
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale pt-3">
                                        {proposal.proposalOptions.slice(0, 3).map((option) => (
                                            <Avatar key={option.id} className="w-10 h-10">
                                                <AvatarImage
                                                    src={`${BASE_URL}/uploads/proposal-images/${option.image}`}
                                                    alt={option.label}
                                                />
                                                <AvatarFallback>
                                                    {option.label?.slice(0, 2).toUpperCase() ?? '??'}
                                                </AvatarFallback>
                                            </Avatar>
                                        ))}
                                        {proposal.proposalOptions.length > 3 && (
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-white text-xs border border-white dark:border-zinc-900">
                                                +{proposal.proposalOptions.length - 3} more
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            )}

            <ConfirmStatusModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={confirmStatusChange}
                statusLabel={selectedAction?.status ?? '-'}
            />
        </>
    );
}
