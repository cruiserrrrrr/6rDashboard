import React from "react";
import styles from "./index.module.scss";

interface IButton {
    size?: string,
    color?: string,
    text?: string | number,
    onClick?: (string) => void,
}

const Button = (props: IButton) => {

    const {
        size = '',
        color = '',
        text = '',
        onClick = () => { }
    } = props

    return (
        <button
            className={`${styles.custom_button} ${styles[color]} ${styles[size]}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;