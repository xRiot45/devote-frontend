import { Proposal } from '@/interfaces/proposal';
import { deleteProposal } from '@/services/proposalService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useDeleteProposal = () => {
    const queryClient = useQueryClient();
    return useMutation<Proposal, Error, number>({
        mutationFn: (id: number) => deleteProposal(id),
        onSuccess: () => {
            toast.success('Success', {
                description: 'Proposal deleted successfully!',
            });

            queryClient.invalidateQueries({
                queryKey: ['proposals'],
            });
        },
        onError: (error) => {
            toast.error('Error', {
                description: `Proposal deletion failed: ${error.message}`,
            });
        },
    });
};
