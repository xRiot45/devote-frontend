import { VotingSessionResponse } from '@/interfaces/voting-session';
import { fetchVotingSession } from '@/services/votionSessionService';
import { useQuery } from '@tanstack/react-query';

export const useFetchVotingSession = () => {
    return useQuery<VotingSessionResponse, Error>({
        queryKey: ['proposals'],
        queryFn: fetchVotingSession,
    });
};
