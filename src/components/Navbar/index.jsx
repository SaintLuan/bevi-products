import Button from '@components/Button';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={`${styles.navbar}`}>
        <div className="wrapper flex justify-end">
            <nav className={`${styles.navbar_options}`}>
                <aside>
                    <i className="uil uil-bell"></i>
                </aside>
                <aside>
                    <Button btnStyle="lg outline" btnColor="primary-01">
                        <i className="uil uil-user"></i>
                        Admin
                    </Button>
                </aside>
            </nav>
        </div>
    </header>
  );
};
export default Navbar;