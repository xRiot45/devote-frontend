import { Proposal } from '@/interfaces/proposal';
import { fetchProposalById } from '@/services/proposalService';
import { useQuery } from '@tanstack/react-query';

export const useFetchProposalById = (id: number) => {
    return useQuery<Proposal, Error>({
        queryKey: ['proposalById'],
        queryFn: () => fetchProposalById(id),
        enabled: !!id,
    });
};
