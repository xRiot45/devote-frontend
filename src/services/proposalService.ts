import api from '@/configs/api';
import { Proposal, ProposalsResponse } from '@/interfaces/proposal';

export async function fetchProposals(): Promise<ProposalsResponse> {
    const response = await api.get('/api/proposals');
    return response.data;
}

export async function fetchProposalById(id: number): Promise<Proposal> {
    const response = await api.get(`/api/proposals/${id}`);
    return response.data.data;
}
