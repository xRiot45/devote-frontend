import api from '@/configs/api';
import { VotingResultByProposalId, VotingResultResponse } from '@/interfaces/voting-results';

export async function fetchVotingResult(): Promise<VotingResultResponse> {
    const response = await api.get('/api/voting-results');
    return response.data;
}

export async function fetchVotingResultByProposalId(id: number): Promise<VotingResultByProposalId> {
    const response = await api.get(`/api/voting-results/${id}`);
    return response.data;
}
