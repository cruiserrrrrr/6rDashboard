import React from "react";
import styles from './index.module.scss';

interface ICustomInput {
    placeholder?: string;
    type?: string;
    onChange?: (event) => void;
    value?: string | number;
    style?: string;
}

const CustomInput = (props: ICustomInput) => {

    const { placeholder = '', type = '', onChange, value, style = '' } = props;

    return <input
        className={`${styles.classic}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value === 0 ? '' : value}
    />

}

export default CustomInput;