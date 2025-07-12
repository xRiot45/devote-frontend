export interface LogVoteFromSmartContractPayload {
    proposalId: number;
    optionId: number;
    voterAddress: string;
    txHash: string;
    votedAt: number;
}
