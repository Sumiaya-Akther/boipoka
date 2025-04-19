import React from 'react';
import { IoMdStarHalf } from "react-icons/io";

const Book = ({ singleBook }) => {
   // console.log(singleBook);
   
   const {bookName, author, image, totalPages, rating, category, tags, publisher, } = singleBook;

    return (
        <div className="card bg-base-100 p-5 shadow-sm border-1 border-gray-200">
            <figure className='bg-[#f3f3f3] w-3/4 md:w-4/4 mx-auto rounded-2xl  p-8'>
                <img className='w-auto h-52 '
                    src={image}
                    alt="Book" />
            </figure>
            <div className="card-body space-y-3">
                <div className='flex text-[18px] font-semibold text-cyan-900'>
                {
                    tags.map((tag, index) => <p key={tag.id || index}>{tag}</p>)
                }
            </div> 
                <h2 className="card-title flex justify-between gap-10">
                    {bookName}
                    <button className=' text-sm lg:text-[18px] font-semibold bg-cyan-300 p-4 rounded-2xl badge'>{totalPages} <span className='text-black text-sm'>pages</span></button>
                </h2>
                <p className='text-[17px] font-semibold text-gray-500 mb-5'>by: {author}</p>
                <div className='border-1 border-dashed border-cyan-500'>

                </div>
                <div className="card-actions justify-between">
                    <div className="text-[18px] font-semibold">{category}</div>
                    <div className="flex gap-3 items-center text-[18px] text-cyan-900 font-semibold">{rating}
                    <IoMdStarHalf size={25}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;