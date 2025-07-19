import { VotingResultResponse } from '@/interfaces/voting-results';
import { fetchVotingResult } from '@/services/votingResultService';
import { useQuery } from '@tanstack/react-query';

export const useFetchVotingResult = () => {
    return useQuery<VotingResultResponse, Error>({
        queryKey: ['proposals'],
        queryFn: fetchVotingResult,
    });
};
