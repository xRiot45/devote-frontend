export interface ProposalOption {
    id: number;
    label: string;
    image?: File | undefined;
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

export type ProposalFormValues = {
    title: string;
    description: string;
    category: string;
    startTime: Date;
    endTime: Date;
    options: {
        label: string;
        description: string;
        image?: File | undefined;
        order: number;
        initialImage?: string | null;
    }[];
};
