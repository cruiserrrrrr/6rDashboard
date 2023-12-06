import React from "react";
import styles from "./index.module.scss";
import Toggle from "../Toggle";

interface IConditionsItem{
    title?: string;
    checked?: boolean;
    onToggled?: () => void;
}

const ConditionItem = (props: IConditionsItem) => {
    const {title = '', checked = false, onToggled = () => {}} = props;
    return(
        <div className={styles.condition_item}>
            <p className={styles.condition_item__title}>{title}</p>
            <Toggle checked={checked} onToggled={onToggled}/>
        </div>
    )
}

export default ConditionItem;