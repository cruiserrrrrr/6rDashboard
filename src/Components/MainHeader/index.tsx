import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import ModuleWrapper from "../ModuleWrapper";

const MainHeader = () => {

    const [currentBalance, setCurrentBalance] = useState(0);
    const [weeklyProfit, setWeeklyProfit] = useState(0);
    const [weeklyPurchase, setWeeklypurchase] = useState(0);

    const getSkins = () => {
        fetch('http://127.0.0.1:5000/bot/bot_statistics')
            .then(response => response.json())
            .then(data => {
                setCurrentBalance(Number(data.botStatistics.botBalance));
                setWeeklypurchase(Number(data.botStatistics.weeklyPurchase))
                setWeeklyProfit(Number(data.botStatistics.weeklyProfit))
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getSkins();
        }, 3000)
        return () => {
            clearInterval(interval)
        };
    }, [])
    let profitPercent = (weeklyProfit / (currentBalance / 100)).toFixed(2)
    return (
        <div className={styles.main_header}>
            <ModuleWrapper>
                <div className={styles.main_header__container}>
                    <div className={styles.current_balance}>
                        <p>Current balance: <span>{currentBalance / 100} rub</span></p>
                    </div>
                    <div className={styles.weekly_profit}>
                        <p>Weekly profit: 
                            <span className={weeklyProfit < 0 ? styles.loss : styles.profit}>
                                {!!weeklyProfit ? profitPercent : 0} %
                            </span>
                        </p>
                    </div>
                    <div className={styles.weekly_profit}>
                        <p>Weekly profit: 
                            <span className={weeklyProfit < 0 ? styles.loss : styles.profit}>
                                {weeklyProfit / 100} rub
                            </span>
                        </p>
                    </div>
                    <div className={styles.weekly_purchase}>
                        <p>Weekly purchase: <span>{weeklyPurchase / 100} rub</span></p>
                    </div>
                </div>
            </ModuleWrapper>
        </div>
    )
}

export default MainHeader