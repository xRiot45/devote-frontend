import api from '@/configs/api';
import { User } from '@/interfaces/users';

export async function fetchUsers(): Promise<User[]> {
    const response = await api.get('/api/users');
    return response.data.data;
}
