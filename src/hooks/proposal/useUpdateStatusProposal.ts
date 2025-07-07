import { StatusEnum } from '@/enums/status';
import { Proposal } from '@/interfaces/proposal';
import { updateStatusProposal } from '@/services/proposalService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUpdateStatusProposal = () => {
    const queryClient = useQueryClient();
    return useMutation<Proposal, Error, { id: number; status: StatusEnum }>({
        mutationFn: ({ id, status }) => updateStatusProposal(id, status),
        onSuccess: () => {
            toast.success('Success', {
                description: 'Proposal status updated successfully!',
            });

            queryClient.invalidateQueries({
                queryKey: ['proposals'],
            });
        },
        onError: (error) => {
            toast.error('Error', {
                description: `Proposal status update failed: ${error.message}`,
            });
        },
    });
};
