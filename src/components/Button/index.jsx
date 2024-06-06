import styles from './Button.module.scss';

const Button = ({type, btnStyle, btnColor, children})=>{
    return(
        <button className={`${styles.btn} ${btnStyle} ${btnColor}`} type={type}>
            {children}
        </button>
    );
};

export default Button;