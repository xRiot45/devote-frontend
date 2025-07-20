export interface DashboardSummaryResponse {
    success: boolean;
    message: string;
    data: {
        totalUsers: number;
        totalProposals: number;
        totalVotes: number;
        totalProposalOptions: number;
    };
}
