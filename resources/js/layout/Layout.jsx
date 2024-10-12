import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main className='mx-auto mt-10'>{children}</main>
        </div>
        
    );
};

export default Layout;