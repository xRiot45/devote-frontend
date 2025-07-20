import { ProposalsResponse } from '../proposal';

export type VotingResultResponse = ProposalsResponse;

export interface VotingResultByProposalId {
    success: boolean;
    message: string;
    data: {
        optionId: number;
        totalVotes: number;
    }[];
}
