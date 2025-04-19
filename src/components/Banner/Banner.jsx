import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around py-16 items-center bg-[#f3f3f3] rounded-2xl'>
            <div>
                <h1 className='font-bold text-4xl mb-8'>Books to freshen up <br /> your bookshelf</h1>
                <button className="btn btn-success">View The List</button>
            </div>
            <div>
                <img className='w-96' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;