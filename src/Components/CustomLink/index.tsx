import React, { useState } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

interface ICustomLink {
    value?: string;
    to?: string;
    title?: string;
    onClick?: () => void;
    iconName?: string;
}

const CustomLink = (props: ICustomLink) => {

    const { value = '', to = '', title = '', onClick = () => { }, iconName = '' } = props;

    const [onExpand, setOnExpand] = useState(true);
    const expand = () => setOnExpand(!onExpand);
    console.log(onExpand)
    return (
        <NavLink title={title} end className={({ isActive }) => isActive ? styles.active_link : styles.link} to={to} onChange={expand} onClick={onClick}>
            <Icon name={iconName} className={styles.link_icon}/>
            {value}
        </NavLink>
    )
}

export default CustomLink;