import React, { useState } from "react";
import styles from "./index.module.scss";

interface ICheckBox{
    onClick?: () => void
}

const Checkbox = (props:ICheckBox) => {

    const {onClick = () => { } } = props;
    const [inputChecked, setInputChecked] = useState(false);

    const handleChange = () => {
        setInputChecked(!inputChecked);
        onClick();
    }
    return (
        <div className={styles.checkbox_container} onClick={handleChange}>
            <input className={styles.checkbox} type="checkbox" onChange={() => { }} checked={inputChecked} />
            <div className={styles.custom_checkbox}></div>
        </div>
    )
}

export default Checkbox;