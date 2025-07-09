'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BASE_URL } from '@/configs/url';
import { StatusEnum } from '@/enums/status';
import { useFetchProposalById } from '@/hooks/proposal/useFetchProposalById';
import { ProposalOption } from '@/interfaces/proposal';
import { cn } from '@/lib/utils';
import { statusBadgeStyleMap, statusIconMap, statusLabelMap } from '@/utils/status-badge-style';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function DetailVote() {
    const params = useParams();
    const id = Number(params.id);

    const { data: proposal, isPending, isError } = useFetchProposalById(id);
    const [selectedOption, setSelectedOption] = useState<ProposalOption | null>(null);

    return (
        <main className="relative pt-32 pb-72 overflow-hidden px-6 transition-colors duration-300 bg-white text-black dark:bg-transparent dark:text-white">
            {/* Background Gradient Circles */}
            <div className="absolute -top-32 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-60 z-0" />
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl opacity-60 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                        Vote{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            Details
                        </span>
                    </h1>
                    <p className="mt-4 text-md text-muted-foreground max-w-2xl mx-auto">
                        Explore the complete information regarding the proposal voting session. Get to know the
                        candidates, timeline, categories, and vote status in one place.
                    </p>
                </div>

                {isPending ? (
                    <p className="text-center text-muted-foreground">Loading proposal data...</p>
                ) : isError || !proposal ? (
                    <p className="text-red-500 text-center">Failed to load proposal data.</p>
                ) : (
                    <Card className="bg-white/10 dark:bg-zinc-900/40 border  backdrop-blur-md rounded-2xl">
                        <CardContent className="p-8 space-y-8">
                            {/* Proposal Summary */}
                            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
                                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-4 py-1 text-xs">
                                    {proposal.category}
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        'text-xs px-3 py-1 rounded-full flex items-center gap-1',
                                        statusBadgeStyleMap[proposal.status as StatusEnum],
                                    )}
                                >
                                    <Icon icon={statusIconMap[proposal.status as StatusEnum]} />
                                    {statusLabelMap[proposal.status as StatusEnum]}
                                </Badge>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                                {proposal.title}
                            </h2>

                            <p className="text-muted-foreground text-base leading-relaxed">
                                {proposal.description || 'No description available for this proposal.'}
                            </p>

                            {/* Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Icon icon="ant-design:calendar-outlined" className="w-4 h-4" />
                                    <span>
                                        <strong>Duration:</strong>{' '}
                                        {format(new Date(proposal.startTime), 'dd MMM yyyy HH:mm')} -{' '}
                                        {format(new Date(proposal.endTime), 'dd MMM yyyy HH:mm')}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon icon="lucide:user" className="w-4 h-4" />
                                    <span>
                                        <strong>Created by:</strong> {proposal.creatorWallet.slice(0, 12)}...
                                        {proposal.creatorWallet.slice(-4)}
                                    </span>
                                </div>
                            </div>

                            {/* Candidates */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-4 text-white/90">Candidates</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Click on each candidate to learn more about their vision and ideas.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                                    {proposal.proposalOptions
                                        .sort((a, b) => a.order - b.order)
                                        .map((option) => (
                                            <Dialog
                                                key={option.id}
                                                onOpenChange={(open) => !open && setSelectedOption(null)}
                                            >
                                                <DialogTrigger asChild>
                                                    <Card
                                                        onClick={() => setSelectedOption(option)}
                                                        className="bg-white/5 border  rounded-xl cursor-pointer transition hover:scale-[1.02] shadow-none"
                                                    >
                                                        <CardContent className="flex gap-4 items-center p-4">
                                                            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-zinc-800">
                                                                <Image
                                                                    src={`${BASE_URL}/uploads/proposal-images/${option.image}`}
                                                                    alt={option.label}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-lg font-semibold dark:text-white">
                                                                    {option.label}
                                                                </h4>
                                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                                    {option.description}
                                                                </p>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </DialogTrigger>

                                                <DialogContent className="sm:max-w-4xl bg-white dark:bg-zinc-900 border-none rounded-2xl">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-2xl">
                                                            Candidate Details
                                                        </DialogTitle>
                                                        <DialogDescription className="text-muted-foreground">
                                                            Full profile and information about the selected candidate.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    {selectedOption && (
                                                        <ScrollArea className="h-[600px]">
                                                            <div className="space-y-5 mt-4">
                                                                <div className="w-full h-96 relative rounded-xl overflow-hidden border border-zinc-800">
                                                                    <Image
                                                                        src={`${BASE_URL}/uploads/proposal-images/${selectedOption.image}`}
                                                                        alt={selectedOption.label}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                                <h3 className="text-xl font-bold dark:text-white">
                                                                    {selectedOption.label}
                                                                </h3>
                                                                <p className="text-base text-muted-foreground leading-relaxed">
                                                                    {selectedOption.description ||
                                                                        'No further description provided.'}
                                                                </p>
                                                                <div className="text-sm text-muted-foreground">
                                                                    <p>
                                                                        <strong>Vision & Goals:</strong> Empower the
                                                                        community through transparent voting systems and
                                                                        inclusive representation.
                                                                    </p>
                                                                    <p className="mt-2">
                                                                        <strong>Experience:</strong> Former community
                                                                        ambassador with 3+ years in blockchain-based
                                                                        governance.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </ScrollArea>
                                                    )}
                                                </DialogContent>
                                            </Dialog>
                                        ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </main>
    );
}
