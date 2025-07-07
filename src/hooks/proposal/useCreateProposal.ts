import { Proposal, ProposalFormValues } from '@/interfaces/proposal';
import { createProposal } from '@/services/proposalService';
import { useMutation } from '@tanstack/react-query';

export const useCreateProposal = () => {
    return useMutation<Proposal, Error, ProposalFormValues>({
        mutationFn: createProposal,
    });
};
