import { Proposal } from '@/interfaces/proposal';
import { deleteProposal } from '@/services/proposalService';
import { useMutation } from '@tanstack/react-query';

export const useDeleteProposal = (id: number) => {
    return useMutation<Proposal, Error, number>({
        mutationFn: () => deleteProposal(id),
    });
};
