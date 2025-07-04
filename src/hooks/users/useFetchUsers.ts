import { User } from '@/interfaces/users';
import { fetchUsers } from '@/services/userService';
import { useQuery } from '@tanstack/react-query';

export const useFetchUsers = () => {
    return useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });
};
