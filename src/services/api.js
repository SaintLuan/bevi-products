import { getUserLocalStorage } from "@/context/AuthProvider/util";
import axios from "axios";

export const beviApi = axios.create({
    baseURL: import.meta.env.VITE_BEVI_URL_API
});

beviApi.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        config.headers.Authorization=`Bearer ${user?.token}`;
        return config;
    }
)