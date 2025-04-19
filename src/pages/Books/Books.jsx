import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
   // const [allbooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[]);

    //const bookPromise = fetch('./booksData.json').then(res => res.json())
     

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center my-10'>Books</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
              {
                data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
              }
              </div>
        </div>
    );
};

export default Books;