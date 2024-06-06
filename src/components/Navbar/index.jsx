import Button from '@components/Button';
import styles from './Navbar.module.scss';
import { getUserLocalStorage } from '@/context/AuthProvider/util';
import { useAuth } from '@/context/AuthProvider/useAuth';

const Navbar = () => {
    const currUser = getUserLocalStorage().email;
    const auth = useAuth();

    const handleLoggout = ()=>{
        auth.logout();
    }

    return (
        <header className={`${styles.navbar}`}>
            <div className="wrapper flex justify-end">
                <nav className={`${styles.navbar_options}`}>
                    <aside>
                        <i className="uil uil-bell"></i>
                    </aside>
                    <aside className={`${styles.navbar_options_account}`}>
                        <Button btnStyle="lg outline" btnColor="primary-01" fontSize="font-sm">
                            <i className="uil uil-user"></i>
                            {currUser}
                        </Button>

                        <article className={`${styles.account_list}`}>
                            <a href="/profle">
                                <i className="uil uil-chat-bubble-user"></i>
                                Ver perfil
                            </a>

                            <button onClick={()=>handleLoggout()}>
                                <i className="uil uil-signout"></i>
                                Sair
                            </button>
                            
                        </article>
                    </aside>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;