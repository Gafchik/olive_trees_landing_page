import axios from 'axios';
import Swal from "sweetalert2";

const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
instance.interceptors.request.use((config) => {
    // Показать индикатор загрузки перед отправкой запроса
    Swal.showLoading();
    return config;
}, (error) => {
    return Promise.reject(error);
});
instance.interceptors.response.use(
    (response) => {
        Swal.close();
        return response;
    },
    (error) => {
        if (
            error.response.status === 400
            || error.response.status === 422
            || error.response.status === 500

        ) {
            Swal.fire({
                icon: 'error',
                title: error.response.data.textError,
                showConfirmButton: false,
                timer: 5000
            })
        }
        return Promise.reject(error);
    }
);
export default instance;