import { NavLink, useLocation } from 'react-router-dom';

// @images
import logo from '@assets/imgs/logo-default.svg';
import icon from '@assets/imgs/favicon.jpg';


import styles from './Sidebar.module.scss';
import { useState } from 'react';

const Sidebar = () => {
    const currRoute = useLocation().pathname;

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const handleActiveSidebar = () =>{
        setIsSidebarActive(!isSidebarActive);
    }

    return (
        <nav className={`${styles.sidebar} ${isSidebarActive ? 'active' : ''}` }>
            <figure className={`${styles.sidebar_logo}`}>
                <img src={logo} alt="Bevi Oficial - Logo" />
                <img src={icon} alt="Bevi Oficial - Logo" />
            </figure>

            <button className={`${styles.toggle_sidebar}`} onClick={()=>{handleActiveSidebar()}}>
                <i className="uil uil-bars"></i>
            </button>

            <ul className={`${styles.sidebar_menu}`}>
                <span className={`${styles.menu_sec_title}`}>Gestão da Loja</span>            
                <li className={`${styles.menu_item} ${currRoute == '/' ? styles.menu_item_active : ''} `}>
                    <NavLink to="/">
                        <i className="uil uil-apps"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <span className={`${styles.menu_sec_title}`}>Gestão de Produtos</span>            
                <li className={`${styles.menu_item} ${currRoute.includes('products') ? styles.menu_item_active : ''}`}>
                    <a href="#">
                        <i className="uil uil-cube"></i>
                        <span>Produtos</span>
                    </a>

                    <ul className={`${styles.submenu}`}>
                        <li className={`${styles.menu_item}`}>
                            <NavLink to="/products">Todos os produtos</NavLink>
                        </li>

                        <li className={`${styles.menu_item}`}>
                            <NavLink to="#blocked">Categorias</NavLink>
                        </li>
                    </ul>
                </li>

            </ul>
        </nav>
    );
};
export default Sidebar;