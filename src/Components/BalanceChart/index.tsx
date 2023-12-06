import React, { useState, useEffect } from 'react';
import styles from "./index.module.scss";
import ModuleWrapper from "../ModuleWrapper";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const BalanceChart = () => {

    const initialData = [
        { date: '2023-10-01', balance: 0 },
        { date: '2023-10-02', balance: 100 },
        { date: '2023-10-03', balance: 90 },
    ];

    const [chartData, setCharttData] = useState(initialData);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Wallet balance',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const test =  [1000, 10000, 4124, 2421, 4577, 2333, 5688]
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: test,
                borderColor: 'rgb(255, 255, 255)',
                backgroundColor: '#121212',
            },
        ],
    };
    return (
        <div className={styles.chart_wrapper}>
            <ModuleWrapper>
                <div className={styles.chart_container}>
                    <Line options={options} data={data} />
                </div>
            </ModuleWrapper>
        </div>
    )
}

export default BalanceChart;