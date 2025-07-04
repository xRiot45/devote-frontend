import api from '@/configs/api';
import { ProposalsResponse } from '@/interfaces/proposal';

export async function fetchProposals(): Promise<ProposalsResponse> {
    const response = await api.get('/api/proposals');
    return response.data;
}
