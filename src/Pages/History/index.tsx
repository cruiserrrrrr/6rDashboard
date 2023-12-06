import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ModuleWrapper from "../../Components/ModuleWrapper";
import Select from "../../Components/Select";

const testList = [{status: 200}, {status: 400}, {status: 429}]

const History = () => {

    const [historyList, setHistoryList] = useState([]);
    const [statusList, setStatuList] = useState([200, 400, 429])
    const getHistoryList = () => {
        fetch('http://127.0.0.1:5000/bot/logs')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setHistoryList(data.logs);
                // setLoading(true)
            })
            .catch(error => {
                console.error(error);
                // setLoading(false)
            });
    }

    useEffect(() => {
        getHistoryList()
    }, [])
    const savedList = historyList
    const filtredStatus = (status) => {

    }

    return (
        <div className={styles.history_wrapper}>
            <div className={styles.history_filters}>
                <ModuleWrapper>
                    <Select
                        placeholder="Select status"
                        list={statusList}
                        handler={filtredStatus}
                    />  
                </ModuleWrapper>
            </div>
            <div className={styles.history_list}>
                <ModuleWrapper>
                    <div className={styles.history_container}>
                        {
                            historyList.map((elem, index) => (
                                <div
                                    className={styles.log_element}
                                    key={index}
                                >
                                    <p>{elem.message}, {elem.status}, {elem.date}</p>
                                    {/* <p>{elem.status}</p> */}
                                </div>
                            ))
                        }
                    </div>
                </ModuleWrapper>
            </div>
        </div>
    )
}

export default History;