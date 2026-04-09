import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from '../UI/BookCard';

const ReadList = () => {
    const { storeBook, wishList } = useContext(BookContext);
            console.log(storeBook, wishList)
     if(storeBook.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-5xl'>No Read List data found</h2>
        </div>
    } 
    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                storeBook.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
            }
        </div>
    );
};

export default ReadList;