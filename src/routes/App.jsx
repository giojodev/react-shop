import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PasswordRecovery from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recoverypassword" element={<PasswordRecovery />} />
                    <Route path="*" element={
                    	<div style={{ padding: "1rem" }}><p>There's nothing here!</p></div>
                    }/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;