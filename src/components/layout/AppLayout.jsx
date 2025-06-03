import React from 'react';
import { Header } from '../UI/Header.jsx';
import { Footer } from '../UI/Footer.jsx';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <Outlet />
            <Footer />
        </>
    );
};