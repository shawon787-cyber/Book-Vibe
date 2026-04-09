
import { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';


const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(bookId, "params");

const books = useLoaderData();
// console.log(books, "books");
const expectedBook = books.find((book) => book.bookId == bookId)
// console.log(expectedBook, "expectedBook")
const {handleMarkAsRead, storeBook} = useContext(BookContext);
console.log(handleMarkAsRead, storeBook)



  return (
    <div className='max-w-7xl mx-auto mt-8 px-2'>
      <div className="flex flex-col justify-center items-center lg:flex-row bg-base-100 shadow-sm p-4 rounded-2xl gap-8">

        <img
          className='h-[400px]'
          src={expectedBook.image}
          alt="Album" />

        <div className="card-body">
          <h2 className="text-2xl font-semibold">{expectedBook.bookName}</h2>
          <h3 className='font-semibold text-xl'>Author: {expectedBook.author}</h3>
          <p>{expectedBook.review}</p>
          <div className="card-actions justify-start mt-4">
            <button onClick={()=> handleMarkAsRead(expectedBook)} className='btn'>Mark as Read</button>
            <button className='btn btn-primary'>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;