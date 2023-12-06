import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface IModuleWrapper {
    children?: ReactNode | JSX.Element;
}


const ModuleWrapper = (props: IModuleWrapper) => {

    const { children } = props;

    return (
        <div className={styles.module_wrapper}>
            {children}
        </div>
    )
}

export default ModuleWrapper;