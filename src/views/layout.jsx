import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthProvider/useAuth";
import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const Layout = () => {
    const auth = useAuth();

    if(!auth.email){
        return(
            <Login />
        );
    }else{
        return(
            <>
                <Navbar />
                <Sidebar />
    
                <Outlet />
            </>
        );
    }
}

export default Layout;