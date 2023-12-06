import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ModuleWrapper from "../ModuleWrapper";
import DatabaseItem from "../DatabaseItem";
import axios from 'axios';


const DatabaseTable = () => {
    
    const [skinsList, setSkinsList] = useState([])
    const [loading, setLoading] = useState(false)
    const getSkins = () => {
        fetch('http://127.0.0.1:5000/bot/items')
            .then(response => response.json())
            .then(data => {
                setSkinsList(data.items);
                setLoading(true)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getSkins();
        }, 1000)
        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <div className={styles.database_table__wrapaper}>
            <ModuleWrapper>
                <div className={styles.database_table}>
                    <div className={styles.database_table__head}>
                        <div className={styles.head_container}>
                            <div className={styles.name}>Name [{`${skinsList.length}`}]</div>
                            <div className={styles.price}>Price</div>
                            <div className={styles.float}>Float</div>
                            <div className={styles.checkflaot}>checkFloat</div>
                            <div className={styles.sticker}>sticker</div>
                            <div className={styles.special}>special</div>
                            <div className={styles.status}>on\off</div>
                            <div className={styles.options}>Options</div>
                        </div>
                    </div>
                    <div className={styles.database_table__body}>
                        {
                            loading ?
                                skinsList.map((item, index) => (
                                    <DatabaseItem
                                        key={index}
                                        name={item.name}
                                        price={item.maxPrice}
                                        float={item.conditionsFloat}
                                        checkFloat={item.checkFloat}
                                        sticker={item.checkSticker}
                                        special={item.specialFloat}
                                        status={item.status}
                                        id={item.id}
                                        skin={item}
                                    />
                                ))
                                :
                                <p
                                    style={{
                                        color: "#FFFFFF",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    Loading...
                                </p>
                        }
                    </div>
                </div>
            </ModuleWrapper>
        </div>
    )
}

export default DatabaseTable;