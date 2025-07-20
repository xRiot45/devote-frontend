import api from '@/configs/api';
import { DashboardSummaryResponse } from '@/interfaces/dashboard';

export async function fetchDashboardSummary(): Promise<DashboardSummaryResponse> {
    const response = await api.get('/api/dashboard/summary');
    return response.data;
}
