import React from 'react';
import styles from './styles.module.scss';
import ModuleWrapper from '../Components/ModuleWrapper';
import Sidebar from '../Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import Database from '../Pages/Database';
import BalanceChart from '../Components/BalanceChart';
import Inventory from '../Pages/Inventory';
import History from '../Pages/History';

const App = () => {

    return (
        <div className={styles.app}>
            <Sidebar />
            <Routes>
                <Route index path='/' element={<Main />} />
                <Route index path='/database' element={<Database />} />
                <Route index path='/statistics' element={<BalanceChart />} />
                <Route index path='/history' element={<History />} />
                <Route index path='/inventory' element={<Inventory />} />
            </Routes>
        </div>
    );
}

export default App;
