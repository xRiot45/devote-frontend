import api from '@/configs/api';
import { LogVoteFromSmartContractPayload } from '@/interfaces/proposal-votes';

export async function logVoteFromSmartContract(payload: LogVoteFromSmartContractPayload) {
    console.log(payload);
    const response = await api.post('/api/proposal-votes', payload);
    return response.data;
}
