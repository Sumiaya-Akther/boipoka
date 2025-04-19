import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    //console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, image, totalPages, yearOfPublishing, rating, review, category, tags, publisher, } = singleBook;

    return (
        <div className='grid grid-cols-1 mb-5 md:grid-cols-2 gap-8 '>
            <div className='bg-[#f3f3f3] flex justify-center items-center py-10 px-4 rounded-2xl'>
                <img className=' w-46 h-60 rounded lg:w-52 lg:h-auto' src={image} alt="" />
            </div>
            <div className='space-y-5'>
                <h1>{bookName}</h1>
                <p>by: {author}</p>
                <div className='border-1 border-gray-300 '></div>
                <p>{category}</p>
                <div className='border-1 border-gray-300'></div>
                <p>{review}</p>
                <div className='flex gap-8 text-[18px] font-semibold text-cyan-900'>
                    Tag:
                    {
                        tags.map((tag, index) => <p key={tag.id || index}>{tag}</p>)
                    }
                </div>
                <div className='border-1 border-gray-300'></div>
                <div>
                    <p>Number of Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className='flex gap-5'>
                <button className="btn btn-outline">Default</button>
                <button className="btn btn-accent">Accent</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;