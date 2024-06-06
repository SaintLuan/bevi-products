import { getUserLocalStorage } from "@/context/AuthProvider/util";
import axios from "axios";

export const beviApi = axios.create({
    baseURL: "http://34.71.240.100/api/"
});

beviApi.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        config.headers.Authorization=`Bearer ${user?.token}`;
        return config;
    }
)