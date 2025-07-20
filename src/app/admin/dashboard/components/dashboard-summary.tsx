import CardSummaryStatistics from '@/components/card-summary-statistic';

interface DashboardSummaryProps {
    data: {
        totalUsers: number;
        totalProposals: number;
        totalVotes: number;
        totalProposalOptions: number;
    };
}

const DashboardSummary: React.FC<DashboardSummaryProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CardSummaryStatistics
                title="Total Users"
                data={data.totalUsers}
                description="Jumlah seluruh pengguna"
                icon="mdi:account-group"
            />
            <CardSummaryStatistics
                title="Total Proposals"
                data={data.totalProposals}
                description="Proposal yang dibuat"
                icon="mdi:file-document-multiple"
            />
            <CardSummaryStatistics
                title="Total Votes"
                data={data.totalVotes}
                description="Total suara yang diberikan"
                icon="mdi:vote"
            />
            <CardSummaryStatistics
                title="Total Options"
                data={data.totalProposalOptions}
                description="Opsi yang tersedia dalam proposal"
                icon="mdi:format-list-bulleted"
            />
        </div>
    );
};

export default DashboardSummary;
