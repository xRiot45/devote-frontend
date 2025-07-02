import axios from 'axios';
import Cookies from 'js-cookie';
import router from 'next/router';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('accessToken');

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response) {
            const status = error.response.status;

            if (status == 401) {
                Cookies.remove('accessToken');
                router.push('/');
            }
        }

        return Promise.reject(error);
    },
);

export default api;
