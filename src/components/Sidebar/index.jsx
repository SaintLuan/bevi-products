// @images
import logo from '@assets/imgs/logo-default.svg';


import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className={`${styles.sidebar}`}>
        <figure className={`${styles.sidebar_logo}`}>
            <img src={logo} alt="Bevi Oficial - Logo" />
        </figure>

        <ul className={`${styles.sidebar_menu}`}>
            <span className={`${styles.menu_sec_title}`}>Gestão da Loja</span>            
            <li className={`${styles.menu_item}`}>
                <a href="/">
                    <i className="uil uil-apps"></i>
                    Dashboard
                </a>
            </li>

            <span className={`${styles.menu_sec_title}`}>Gestão de Produtos</span>            
            <li className={`${styles.menu_item}`}>
                <a href="#">
                    <i className="uil uil-cube"></i>
                    Produtos
                </a>

                <ul className={`${styles.submenu}`}>
                    <li className={`${styles.menu_item}`}>
                        <a href="/products">Todos os produtos</a>
                    </li>

                    <li className={`${styles.menu_item}`}>
                        <a href="#">Categorias</a>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>
  );
};
export default Sidebar;