import React from 'react';
import { useLoaderData } from 'react-router';

const Books = () => {
    const books = useLoaderData();
        console.log(books, "books");
    return (
        
        <div>
            <h3>Books</h3>
        </div>
    );
};

export default Books;