import api from '@/configs/api';
import { LogVoteFromSmartContractPayload } from '@/interfaces/proposal-votes';

export async function logVoteFromSmartContract(payload: LogVoteFromSmartContractPayload) {
    const response = await api.post('/api/proposal-votes', payload);
    return response.data;
}
