import { createContext, useEffect, useState } from "react";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext({});

export const AuthProvider =({children})=>{
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
    },[]);


    async function authenticate(data){
        const response = await LoginRequest(data);

        const payload = {
            token: response.access_token
        };
        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    );
}