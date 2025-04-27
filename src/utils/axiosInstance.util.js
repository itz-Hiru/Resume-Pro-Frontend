import axios from "axios";
import { BASIC_URL } from "./apiPath.util";

const axiosInstance = axios.create({
    baseURL: BASIC_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors globally
        if (error.response) {

            if (error.response.status === 400) {
                window.location.href = "/";  // Redirect to Login page
            } else if (error.response.status === 500) {
                console.error("Server Error. Please try again later."); // Server Error
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("Request timeout. Please try again."); // Timeout Error
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
