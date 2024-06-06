import { getUserLocalStorage } from "@/context/AuthProvider/util";
import axios from "axios";


export const beviAPI =  axios.create({
    baseURL: "http://34.71.240.100/api",
});

beviAPI.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        config.headers.Authorization=user?.token;
        return config;
    },(error)=>{
        return Promisse.reject(error);
    }
)
