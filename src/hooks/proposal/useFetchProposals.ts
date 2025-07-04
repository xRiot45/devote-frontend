import { ProposalsResponse } from '@/interfaces/proposal';
import { fetchProposals } from '@/services/proposalService';
import { useQuery } from '@tanstack/react-query';

export const useFetchProposals = () => {
    return useQuery<ProposalsResponse, Error>({
        queryKey: ['proposals'],
        queryFn: fetchProposals,
    });
};
