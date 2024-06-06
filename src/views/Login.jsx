
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";
import Button from '@/components/Button';

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});


const Login = () => {
    

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(loginSchema)
    }); 
    
    const onInvalid = (errors) => {
        console.error(errors);
    }
    function handleLogin(data){
        console.log(data);
    }

    return (
        <section>
            
            <form noValidate onSubmit={handleSubmit(handleLogin, onInvalid)} >
                <h1>Login</h1>
                <fieldset className="lg">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" {...register('email')} />
                </fieldset>

                <fieldset className="lg">
                    <label htmlFor="password">Senha</label>
                    <input type="text" id="password" {...register('password')} />
                </fieldset> 

                <Button btnColor="info" btnStyle="solid lg" type="submit">
                    Login    
                </Button>                
            </form>
        
        </section>
    );
}

export default Login;
