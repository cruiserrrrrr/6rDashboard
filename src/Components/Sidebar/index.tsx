import React, { useState, useEffect } from 'react';
import styles from "./index.module.scss";
import ModuleWrapper from "../ModuleWrapper";
import Icon from "../Icon";
import SidebarLogo from "../SidebarLogo";
import SidebarNav from "../SidebarNav";



const Sidebar = () => {

    return (
        <div className={styles.sidebar}>
            <ModuleWrapper>
                <div className={styles.sidebar_container}>
                    <SidebarLogo />
                    <SidebarNav />
                </div>
            </ModuleWrapper>
        </div>
    )
}

export default Sidebar;