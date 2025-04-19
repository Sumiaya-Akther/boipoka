import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-[calc(100vh-412px)] p-5 my-6'>
            <Outlet></Outlet> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;