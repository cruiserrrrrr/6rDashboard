import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface IModalInventoryItem {
    status: boolean,
    childer: ReactNode | JSX.Element
}

const ModalInventoryItem = (props: IModalInventoryItem) => {

    const {
        status = false
    } = props;

    return (
        <div className={`${styles.modal_wrapper} ${status ? styles.modal_active : styles.modal_hidden}`}>
            <div className={styles.modal_container}>
                
            </div>
        </div>
    )
}

export default ModalInventoryItem;