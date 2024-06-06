import styles from './Button.module.scss';

const Button = ({type, btnStyle, btnColor, fontSize, children})=>{
    return(
        <button className={`${styles.btn} ${btnStyle} ${fontSize} ${btnColor}`} type={type}>
            {children}
        </button>
    );
};

export default Button;