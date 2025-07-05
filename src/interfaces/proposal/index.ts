export interface ProposalOption {
    id: number;
    label: string;
    image: string;
    order: number;
    description: string;
}

export interface Proposal {
    id: number;
    title: string;
    description: string;
    category: string;
    startTime: string;
    endTime: string;
    status: string;
    creatorWallet: string;
    proposalOptions: ProposalOption[];
    createdAt: string;
    updatedAt: string;
}

export interface ProposalsResponse {
    success: boolean;
    message: string;
    data: {
        items: Proposal[];
        meta: object;
        links: object;
    };
}
