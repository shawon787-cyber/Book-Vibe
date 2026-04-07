
import { use } from 'react';
import { CiStar } from "react-icons/ci";

const bookPromise = fetch('/booksData.json')
.then(res=> res.json())

const AllBooks = () => {
    const books = use(bookPromise);
    console.log(books, "books");
    return (
        <div className='my-12 max-w-7xl mx-auto'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>
            <div className='grid lg:grid-cols-3 gap-6 lg:gap-8 justify-center lg:justify-between'>
                {
                books.map(book => {
                    return (
                        <div className="card bg-gray-100  shadow-sm">
  <figure className='p-6'>
    <img className='h-[350px] w-full rounded-2xl'
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-2'>
        {
        book.tags.map((tag) => (
            <div className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
        ))
    }
    </div>
      <h2 className='font-bold text-2xl'>{book.bookName}</h2>
    <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-between border-t border-dashed pt-4">
      <div className="badge badge-outline">{book.category}</div>
      <div className="badge badge-outline">{book.rating} <CiStar /></div>
    </div>
  </div>
</div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;