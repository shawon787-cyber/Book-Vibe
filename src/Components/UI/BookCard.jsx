import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const BookCard = ({book}) => {
    return (
        <div>
             <Link to={`/bookDetails/${book.bookId}`} className="card bg-gray-100  shadow-sm">
              <figure className='p-6'>
                <img className='h-[350px] w-full rounded-2xl'
                  src={book.image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className='flex gap-2'>
                    {
                    book.tags.map((tag, ind) => (
                        <div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
                    ))
                }
                </div>
                  <h2 className='font-bold text-2xl'>{book.bookName}</h2>
                <div className='flex justify-between text-gray-700'>
                  <p className='font-semibold text-lg'>{book.author}</p>
                  <p className='font-semibold text-lg'>Pages: {book.totalPages}</p>
                </div>
                <div className="card-actions justify-between border-t border-dashed pt-4">
                  <div className="badge badge-outline">{book.category}</div>
                  <div className="badge badge-outline">{book.rating} <CiStar /></div>
                </div>
              </div>
            </Link>
        </div>
    );
};

export default BookCard;