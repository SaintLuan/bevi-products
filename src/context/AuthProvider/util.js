import { beviApi } from "@/services/api";

export function setUserLocalStorage(user){
    localStorage.setItem('u', JSON.stringify(user));
}
export function getUserLocalStorage(){
    const json = localStorage.getItem("u");

    if(!json){
        return null;
    }

    const user = JSON.parser(json);

    return user ?? null;
}

export async function LoginRequest(data){
    try {
        const request = await beviApi.post('auth/login', data);

        return request.data;
    } catch (error) {
        return null;
    }
}