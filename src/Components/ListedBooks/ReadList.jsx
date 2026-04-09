import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from '../UI/BookCard';

const ReadList = ({ sortingType }) => {
    const { storeBook } = useContext(BookContext);

    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        let updatedBooks = [...storeBook];

        if (sortingType === 'pages') {
            updatedBooks.sort((a, b) => a.totalPages - b.totalPages);
        } 
        else if (sortingType === 'rating') {
            updatedBooks.sort((a, b) => b.rating - a.rating);
        }

        setFilteredBooks(updatedBooks);
    }, [sortingType, storeBook]);

    if (filteredBooks.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-5xl'>No Read List data found</h2>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                filteredBooks.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))
            }
        </div>
    );
};

export default ReadList;