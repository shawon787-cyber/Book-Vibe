import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from '../UI/BookCard';

const WishList = () => {
    const { wishList } = useContext(BookContext);
            console.log( wishList)
    if(wishList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-5xl'>No WishList data found</h2>
        </div>
    }        
    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                wishList.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
            }
        </div>
    );
};

export default WishList;