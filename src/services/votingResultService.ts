import api from '@/configs/api';
import { VotingResultResponse } from '@/interfaces/voting-results';

export async function fetchVotingResult(): Promise<VotingResultResponse> {
    const response = await api.get('/api/voting-results');
    return response.data;
}
