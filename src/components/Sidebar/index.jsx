import { NavLink, useLocation } from 'react-router-dom';

// @images
import logo from '@assets/imgs/logo-default.svg';


import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const currRoute = useLocation().pathname;
    return (
        <nav className={`${styles.sidebar}`}>
            <figure className={`${styles.sidebar_logo}`}>
                <img src={logo} alt="Bevi Oficial - Logo" />
            </figure>

            <ul className={`${styles.sidebar_menu}`}>
                <span className={`${styles.menu_sec_title}`}>Gestão da Loja</span>            
                <li className={`${styles.menu_item} ${currRoute == '/' ? styles.menu_item_active : ''} `}>
                    <NavLink to="/">
                        <i className="uil uil-apps"></i>
                        Dashboard
                    </NavLink>
                </li>

                <span className={`${styles.menu_sec_title}`}>Gestão de Produtos</span>            
                <li className={`${styles.menu_item} ${currRoute.includes('products') ? styles.menu_item_active : ''}`}>
                    <a href="#">
                        <i className="uil uil-cube"></i>
                        Produtos
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