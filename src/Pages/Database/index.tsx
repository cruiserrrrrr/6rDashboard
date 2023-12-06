import React from "react";
import styles from "./index.module.scss";
import AddSkin from "../../Components/AddSkin";
import DatabaseTable from "../../Components/DatabaseTable";


const Database = () => {
    return (
        <div className={styles.database_wrapper}>
            <div className={styles.addItem}>
                <AddSkin />
            </div>
            <div className={styles.table}>
                <DatabaseTable />
            </div>
        </div>
    )
}

export default Database;