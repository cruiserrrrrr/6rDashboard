import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ModuleWrapper from "../ModuleWrapper";
import MainSettingsElem from "../MainSettingsElem";
import Checkbox from "../Checkbox";

const MainSettings = () => {

    const [statusBot, setStatusBot] = useState(false)

    const getBotStatus = () => {
        fetch('http://127.0.0.1:5000/bot/status')
            .then(response => response.json())
            .then(data => {
                setStatusBot(data[0].status);
                console.log(data[0].status, "status")
            })
            .catch(error => {
                console.error(error);
                setStatusBot(false)
            });
    }
    useEffect(() => {
        getBotStatus()
    }, [])
    const changeBotStatus = (method) => {
        fetch(`http://127.0.0.1:5000/bot/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.status);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const changeStatusBot = () => {
        if (statusBot) {
            console.log("disable")
            // setStatusBot(!statusBot)
            changeBotStatus('disable')
            getBotStatus()
        }
        else {
            console.log("active")
            // setStatusBot(!statusBot)
            changeBotStatus('enable')
            getBotStatus()
        }
    }

    return (
        <div className={styles.main_settings}>
            <ModuleWrapper>
                <div className={styles.main_settings__container}>
                    <MainSettingsElem text="Status bot:" type="toggle" onToggled={changeStatusBot} toggleChecked={statusBot} />
                    <MainSettingsElem text="Check float:" type="toggle" />
                </div>
            </ModuleWrapper>
        </div>
    )
}

export default MainSettings;