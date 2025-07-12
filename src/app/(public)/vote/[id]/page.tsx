'use client';

import votingAbi from '@/abi/VotingAbi.json';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import { useLogFromSmartContract } from '@/hooks/proposal-votes/useLogFromSmartContract';
import { useFetchProposalById } from '@/hooks/proposal/useFetchProposalById';
import { ProposalOption } from '@/interfaces/proposal';
import { cn } from '@/lib/utils';
import { statusBadgeStyleMap, statusIconMap, statusLabelMap } from '@/utils/status-badge-style';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAccount, useWriteContract } from 'wagmi';

export default function DetailVote() {
    const params = useParams();
    const id = Number(params.id);

    const { data: proposal, isPending, isError } = useFetchProposalById(id);
    const [selectedOption, setSelectedOption] = useState<ProposalOption | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    // Handle Smart Contract Interaction
    const { address } = useAccount();
    const { writeContractAsync } = useWriteContract();
    const logVoteMutation = useLogFromSmartContract();

    const handleVote = async (option: ProposalOption) => {
        if (!proposal?.id) return toast.error('Proposal belum dimuat');
        if (!address) return toast.error('Wallet belum terkoneksi');

        try {
            const tx = await writeContractAsync({
                address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
                abi: votingAbi,
                functionName: 'vote',
                args: [Number(proposal.id), Number(option.id)],
            });

            logVoteMutation.mutate({
                proposalId: Number(proposal.id),
                optionId: Number(option.id),
                voterAddress: address,
                txHash: tx,
                votedAt: Math.floor(Date.now() / 1000),
            });

            toast.success('Success', {
                description: 'Vote successfully submitted!',
            });

            setIsDialogOpen(false);
        } catch (error) {
            console.log(error);
            toast.error('Error', {
                description: (error as Error).message,
            });

            setIsDialogOpen(false);
        }
    };

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

                            <div
                                className="prose dark:prose-invert max-w-full"
                                dangerouslySetInnerHTML={{ __html: proposal?.description || '' }}
                            />

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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {proposal.proposalOptions
                                        .sort((a, b) => a.order - b.order)
                                        .map((option) => (
                                            <Card
                                                key={option.id}
                                                className="bg-white/5 border rounded-xl transition  shadow-none"
                                            >
                                                <CardContent className="flex gap-4 items-start p-4">
                                                    <div className="w-16 h-16 relative rounded-full overflow-hidden border border-zinc-800">
                                                        <Image
                                                            src={`${BASE_URL}/uploads/proposal-images/${option.image}`}
                                                            alt={option.label}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    <div className="space-y-2 flex-1">
                                                        <h4 className="text-lg font-semibold dark:text-white">
                                                            {option.label}
                                                        </h4>

                                                        {/* Tombol Lihat Detail (Dialog Trigger) */}
                                                        <Dialog
                                                            open={isDialogOpen}
                                                            onOpenChange={(open) => setIsDialogOpen(open)}
                                                        >
                                                            <DialogTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    className="w-full mt-2 py-5"
                                                                    onClick={() => {
                                                                        setSelectedOption(option);
                                                                        setIsDialogOpen(true);
                                                                    }}
                                                                >
                                                                    View Details
                                                                </Button>
                                                            </DialogTrigger>

                                                            <DialogContent className="sm:max-w-4xl bg-white dark:bg-zinc-900 border-none rounded-2xl">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-2xl">
                                                                        Candidate Details
                                                                    </DialogTitle>
                                                                    <DialogDescription className="text-muted-foreground">
                                                                        Full profile and information about the selected
                                                                        candidate.
                                                                    </DialogDescription>
                                                                </DialogHeader>

                                                                {selectedOption && (
                                                                    <ScrollArea className="h-[600px]">
                                                                        <div className="space-y-5 mt-4">
                                                                            <div className="w-full h-screen relative rounded-xl overflow-hidden border border-zinc-800">
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

                                                                            <div
                                                                                className="prose dark:prose-invert max-w-full"
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html:
                                                                                        selectedOption?.description ||
                                                                                        '',
                                                                                }}
                                                                            />

                                                                            <Button
                                                                                onClick={() =>
                                                                                    handleVote(selectedOption)
                                                                                }
                                                                                className="bg-gradient-to-r w-full from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all py-5 cursor-pointer rounded-sm"
                                                                            >
                                                                                <Icon icon="mdi:vote" />
                                                                                Vote Now
                                                                            </Button>
                                                                        </div>
                                                                    </ScrollArea>
                                                                )}
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                </CardContent>
                                            </Card>
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
