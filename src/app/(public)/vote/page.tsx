'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BASE_URL } from '@/configs/url';
import { StatusEnum } from '@/enums/status';
import { useFetchVotingSession } from '@/hooks/voting-session/useFetchVotingSession';
import { cn } from '@/lib/utils';
import { statusBadgeStyleMap, statusIconMap, statusLabelMap } from '@/utils/status-badge-style';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function VotePage() {
    const { data, isPending, isError } = useFetchVotingSession();
    const proposals = data?.data;
    console.log(proposals);

    return (
        <>
            <main className="relative pt-32 pb-72 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
                {/* Glowing Background Blobs */}
                <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-14 text-center">
                        <h1 className="mt-3 text-5xl font-extrabold leading-tight tracking-tight">
                            Voting Proposal{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                Available
                            </span>
                        </h1>
                        <p className="mt-6 text-md text-muted-foreground max-w-2xl mx-auto">
                            Find active proposals, read candidate descriptions, and cast your vote securely through your
                            Web3 wallet.
                        </p>
                    </div>

                    {/* Content */}
                    {isPending ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <Skeleton key={i} className="h-72 rounded-xl" />
                            ))}
                        </div>
                    ) : isError ? (
                        <p className="text-red-500 text-center">Gagal memuat data proposal.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {proposals?.map((proposal) => (
                                <Link
                                    key={proposal.id}
                                    href={proposal?.status === StatusEnum.ACTIVE ? `/vote/${proposal.id}` : ''}
                                >
                                    <Card className="bg-white/10 dark:bg-zinc-900/20 border-border backdrop-blur-md hover:shadow-indigo-500/30 transition-all duration-300 rounded-2xl overflow-hidden group">
                                        <CardContent className="p-6 space-y-6">
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
                                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                                                {proposal.title}
                                            </span>

                                            {/* Metadata */}
                                            <div className="text-muted-foreground space-y-3.5">
                                                <p className="text-sm flex">
                                                    <Icon
                                                        icon="ant-design:calendar-outlined"
                                                        className=" mr-3 h-4 w-4 dark:text-white"
                                                    />{' '}
                                                    {new Date(proposal.startTime).toLocaleString()} –{' '}
                                                    {new Date(proposal.endTime).toLocaleString()}
                                                </p>

                                                <p className="text-sm flex">
                                                    <Icon
                                                        icon="lucide:user-pen"
                                                        className="dark:text-white mr-3 h-4 w-4"
                                                    />{' '}
                                                    <span>
                                                        {proposal.creatorWallet.slice(0, 14)}...
                                                        {proposal.creatorWallet.slice(-4)}
                                                    </span>
                                                </p>
                                            </div>

                                            {/* Candidates */}
                                            <div className="flex items-center pt-3">
                                                {proposal.proposalOptions.slice(0, 3).map((option, index) => (
                                                    <div
                                                        key={option.id}
                                                        className={cn(
                                                            'relative w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-zinc-950 shadow',
                                                            index !== 0 && '-ml-3',
                                                            `z-${10 - index}`,
                                                        )}
                                                    >
                                                        <Image
                                                            src={`${BASE_URL}/uploads/proposal-images/${option.image}`}
                                                            alt={option.label}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                ))}
                                                {proposal.proposalOptions.length > 3 && (
                                                    <span className="-ml-2 text-xs bg-zinc-800 text-white px-2 py-1 rounded-full border border-white dark:border-zinc-900 z-0">
                                                        +{proposal.proposalOptions.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
