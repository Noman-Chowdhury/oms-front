import axios from 'axios';

const adminAxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api/admin`,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${localStorage.getItem('_a_t')}`
    }
});

const userAxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api/user`,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${localStorage.getItem('_u_t')}`
    }
});

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}`,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
    }
});

export {adminAxiosInstance, userAxiosInstance, axiosInstance};
