import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {
        const { storeBook } = useContext(BookContext);
        console.log(storeBook)
    return (
        
        <div>
            <h3>Listed Books</h3>
        </div>
    );
};

export default Books;