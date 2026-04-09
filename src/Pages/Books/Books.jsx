import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {
        const { storeBook, wishList } = useContext(BookContext);
        console.log(storeBook, wishList)
    return (
        
        <div className='max-w-7xl mx-auto'>
            readList: {storeBook.length}
        </div>
    );
};

export default Books;