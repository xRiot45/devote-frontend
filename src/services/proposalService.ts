import api from '@/configs/api';
import { StatusEnum } from '@/enums/status';
import { Proposal, ProposalFormValues, ProposalsResponse } from '@/interfaces/proposal';

export async function fetchProposals(): Promise<ProposalsResponse> {
    const response = await api.get('/api/proposals');
    return response.data;
}

export async function fetchProposalById(id: number): Promise<Proposal> {
    const response = await api.get(`/api/proposals/${id}`);
    return response.data.data;
}

export async function createProposal(payload: ProposalFormValues): Promise<Proposal> {
    const response = await api.post('/api/proposals', payload);
    return response.data;
}

export async function updateProposal(id: number, payload: ProposalFormValues): Promise<Proposal> {
    const response = await api.patch(`/api/proposals/${id}`, payload);
    return response.data;
}

export async function deleteProposal(id: number): Promise<Proposal> {
    const response = await api.delete(`/api/proposals/${id}`);
    return response.data;
}

export async function updateStatusProposal(id: number, status: StatusEnum): Promise<Proposal> {
    const response = await api.put(`/api/proposals/${id}/status`, { status });
    return response.data;
}
