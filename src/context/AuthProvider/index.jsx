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
            email: data.email,
            token: response.access_token,
            exp: response.expires_in
        };
        
        setUser(payload);
        setUserLocalStorage(payload);

        // if (Date.now() >= response.expires_in) {
        //     setUser(null);
        //     setUserLocalStorage(null);
        // }
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