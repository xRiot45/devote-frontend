import api from '@/configs/api';
import { VotingSessionResponse } from '@/interfaces/voting-session';

export async function fetchVotingSession(): Promise<VotingSessionResponse> {
    const response = await api.get('/api/voting-sessions');
    return response.data;
}
