import { Proposal, ProposalFormValues } from '@/interfaces/proposal';
import { updateProposal } from '@/services/proposalService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useUpdateProposal = () => {
    const router = useRouter();
    return useMutation<Proposal, Error, { id: number; payload: ProposalFormValues }>({
        mutationFn: ({ id, payload }) => updateProposal(id, payload),
        onSuccess: () => {
            toast.success('Success', {
                description: 'Proposal updated successfully!',
            });
            router.push('/admin/proposals-management');
        },
        onError: (error) => {
            toast.error('Error', {
                description: `Proposal update failed: ${error.message}`,
            });
        },
    });
};
