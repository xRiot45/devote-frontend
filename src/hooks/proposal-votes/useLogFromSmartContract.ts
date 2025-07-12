import { logVoteFromSmartContract } from '@/services/proposalVoteService';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useLogFromSmartContract = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: logVoteFromSmartContract,
        onSuccess: () => {
            toast.success('Success', {
                description: 'Proposal vote logged successfully!',
            });
            router.push('/');
        },
        onError: (error) => {
            toast.error('Error', {
                description: `Proposal vote log failed: ${error.message}`,
            });
        },
    });
};
