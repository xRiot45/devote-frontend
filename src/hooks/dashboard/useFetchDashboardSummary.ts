import { DashboardSummaryResponse } from '@/interfaces/dashboard';
import { fetchDashboardSummary } from '@/services/dashboardService';
import { useQuery } from '@tanstack/react-query';

export const useFetchDashboardSummary = () => {
    return useQuery<DashboardSummaryResponse, Error>({
        queryKey: ['dashboardSummary'],
        queryFn: () => fetchDashboardSummary(),
    });
};
