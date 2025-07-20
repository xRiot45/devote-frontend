import { VotingResultByProposalId } from '@/interfaces/voting-results';
import { fetchVotingResultByProposalId } from '@/services/votingResultService';
import { useQuery } from '@tanstack/react-query';

export const useFetchVotingResultByProposalId = (id: number) => {
    return useQuery<VotingResultByProposalId, Error>({
        queryKey: ['proposals'],
        queryFn: () => fetchVotingResultByProposalId(id),
    });
};
