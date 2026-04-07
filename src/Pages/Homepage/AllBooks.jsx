
import { use } from 'react';

import BookCard from '../../Components/UI/BookCard';

const bookPromise = fetch('/booksData.json')
.then(res=> res.json())

const AllBooks = () => {
    const books = use(bookPromise);
    console.log(books, "books");
    return (
        <div className='my-12 max-w-7xl mx-auto'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center lg:justify-between px-2 mt-6'>
                {
                books.map((book, ind) => {
                    return (
                        <BookCard key={ind} book={book}></BookCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;