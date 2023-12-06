import React, { useState, useEffect } from 'react';
import styles from "./index.module.scss";
import MainHeader from "../../Components/MainHeader";
import BalanceChart from '../../Components/BalanceChart';
import MainSettings from '../../Components/MainSettings';
import io from 'socket.io-client';

const Main = () => {
    const socket = io('http://127.0.0.1:5000');
    const [serverMessages, setServerMessages] = useState([]);

    useEffect(() => {
        socket.on('server_message', function (data) {
            setServerMessages((prevMessages) => [...prevMessages, data]);
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.header}>
                <MainHeader />
            </div>
            <div className={styles.settings}>
                <MainSettings />
            </div>
            <div className={styles.logs}>
                <div className={styles.logs_header}>
                    <h2 style={{ color: "#FFFFFF" }}>Logs</h2>
                </div>
                <ul className={styles.logs_wrapper}>
                    {serverMessages.map((message, index) => (
                        <li
                            key={index}
                            className={message.status === 200 ? styles.log_ok : styles.log_error}
                        >
                            {message.message}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.table}></div>
        </div>
    )
}

export default Main;