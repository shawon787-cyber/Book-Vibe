
import { useLoaderData, useParams } from 'react-router';


const BookDetails = () => {
    const {bookId} = useParams();
    console.log(bookId, "params");

    const books = useLoaderData();
        console.log(books, "books");
    const expectedBook = books.find((book) => book.bookId == bookId)
    console.log(expectedBook, "expectedBook")
        
    return (
        <div className='max-w-7xl mx-auto mt-8 px-2'>
            <div className="flex flex-col justify-center items-center lg:flex-row bg-base-100 shadow-sm p-4 rounded-2xl">
  
    <img
      className='h-[400px]'  
      src={expectedBook.image}
      alt="Album" />
  
  <div className="card-body">
    <h2 className="text-2xl font-semibold">{expectedBook.bookName}</h2>
    <h3 className='font-semibold text-xl'>Author: {expectedBook.author}</h3>
    <p>{expectedBook.review}</p>
    <div className="card-actions justify-start mt-4">
      <button className='btn'>Read Now</button>
      <button className='btn'>Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;