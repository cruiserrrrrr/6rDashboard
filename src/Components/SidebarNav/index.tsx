import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import CustomLink from "../CustomLink";
import navList from './navList.json';

interface ISidebarNav {
    children?: ReactNode | JSX.Element
}

const SidebarNav = (props: ISidebarNav) => {

    const { children } = props;

    return (
        <nav className={styles.nav_container}>
            {/* {children} */}
            {
                navList.map(navItem => (
                    <CustomLink
                        key={navItem.value}
                        value={navItem.value}
                        iconName={navItem.iconName}
                        to={navItem.to}
                        title={navItem.title}
                    />
                ))
            }

        </nav>
    )
}

export default SidebarNav;