import styles from './Card.module.scss';

const Card = ({title, size, children}) => {
    return(
        <article className={`${styles.card} ${size}`}>
            <header>
                <h3>{title}</h3>

                <button>
                    <i className="uil uil-draggabledots"></i>
                </button>
            </header>

            <section>
                {children}
            </section>
        </article>
    );
};

export default Card;