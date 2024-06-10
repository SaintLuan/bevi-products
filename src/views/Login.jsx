
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import { useAuth } from "@/context/AuthProvider/useAuth";
import Button from '@/components/Button';

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});


const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    // const [. setMessage] = useState("");

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(loginSchema)
    }); 
    
    const onInvalid = (errors) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errors,
        });
    }
    function handleLogin(data){
        setMessage("");

        try {
            auth.authenticate(data);
            setMessage("Login realizado com sucesso!!");
            return navigate("/");
        } catch (error) {
            setMessage("Erro no login! E-mail ou senha inválido!");
        }
    }

    return (
        <section className="login_page">
            <form noValidate onSubmit={handleSubmit(handleLogin, onInvalid)} >
                <h1>Login {import.meta.env.VITE_BEVI_URL_API}</h1>
                <fieldset className="lg">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" {...register('email')} placeholder="E-mail"/>
                </fieldset>

                <fieldset className="lg">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" {...register('password')} placeholder="Senha"/>
                </fieldset> 

                <p>{message}</p>

                <Button btnColor="info" btnStyle="solid lg" type="submit">
                    Login    
                </Button>                
            </form>
        
        </section>
    );
}

export default Login;
