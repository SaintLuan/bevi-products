import axios from "axios";

export const beviApi = axios.create({
    baseURL: "http://34.71.240.100/api/"
});