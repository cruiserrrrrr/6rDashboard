import React from "react"
import styles from "./index.module.scss"
import Toggle from "../Toggle"
import Checkbox from "../Checkbox"

interface IMainSettingsElem {
    type?: string,
    text?: string,
    onToggled?: () => void,
    toggleChecked?: boolean,

}
const MainSettingsElem = (props: IMainSettingsElem) => {

    const { type = "", text = "", onToggled = () => {}, toggleChecked = false } = props

    return (
        <div className={styles.settings_elem}>
            <p className={styles.settings_elem__text}>{text}</p>
            {
                type === 'toggle' ?
                    <Toggle onToggled={onToggled} checked={toggleChecked}/>
                    :
                    type === 'checkBox' ?
                        <Checkbox/>
                        :
                        <></>
            }
        </div>
    )
}

export default MainSettingsElem