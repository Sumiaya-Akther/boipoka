import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    //console.log(data);
    
    return (
        <div className='w-11/12 mx-auto my-10'>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;