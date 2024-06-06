import styles from './Title.module.scss';

const Title = ({pageTitle}) => {
    return(
        <header className={`${styles.headerSection}`}>
            <h1>{pageTitle}</h1>
            <nav>
                <ul>
                    <li>Bevi Crud</li>
                    <li>/</li>
                    <li>{pageTitle}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Title;