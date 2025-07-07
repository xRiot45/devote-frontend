import { Proposal, ProposalFormValues } from '@/interfaces/proposal';
import { createProposal } from '@/services/proposalService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useCreateProposal = () => {
    const router = useRouter();
    return useMutation<Proposal, Error, ProposalFormValues>({
        mutationFn: createProposal,
        onSuccess: () => {
            toast.success('Success', {
                description: 'Proposal created successfully!',
            });
            router.push('/admin/proposals-management');
        },
        onError: (error) => {
            toast.error('Error', {
                description: `Proposal creation failed: ${error.message}`,
            });
        },
    });
};
