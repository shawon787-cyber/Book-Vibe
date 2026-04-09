import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()
const BookProvider = ({children}) => {
    const [storeBook, setStoreBook] = useState([]);
    const [wishList, setWishList] = useState([]);
// const handleMarkAsRead = (currentBook) => {
//     // console.log(currentBook);
//     const isExistBook = storeBook.find(book => book.bookId == currentBook.bookId)
//     if(isExistBook){
//       toast.error("The book is already exist")
//     }
//     else{
//       setStoreBook([...storeBook, currentBook])
//       toast.success(`${currentBook.bookName} is added to list`)
//     }
//   };

// const handleWishList = (currentBook) => {
   
//     const isExistBook = wishList.find(book => book.bookId == currentBook.bookId)
//     if(isExistBook){
//       toast.error("The book is already in read list");
//       return
//     }
//     else{
//       setWishList([...wishList, currentBook])
//       toast.success(`${currentBook.bookName} is added to wish list`)
//     }
//   };
const handleMarkAsRead = (currentBook) => {
  const isExistBook = storeBook.find(
    (book) => book.bookId == currentBook.bookId
  );

  if (isExistBook) {
    toast.error("The book is already in read list");
  } else {
    // add to read list
    setStoreBook([...storeBook, currentBook]);

    // remove from wishlist
    const updatedWishList = wishList.filter(
      (book) => book.bookId !== currentBook.bookId
    );
    setWishList(updatedWishList);

    toast.success(`${currentBook.bookName} is added to read list`);
  }
};

const handleWishList = (currentBook) => {
  const isExistBook = wishList.find(
    (book) => book.bookId == currentBook.bookId
  );

  if (isExistBook) {
    toast.error("The book is already in wish list");
    return;
  } else {
    // add to wishlist
    setWishList([...wishList, currentBook]);

    // remove from read list
    const updatedReadList = storeBook.filter(
      (book) => book.bookId !== currentBook.bookId
    );
    setStoreBook(updatedReadList);

    toast.success(`${currentBook.bookName} is added to wish list`);
  }
};
    const data = {
        storeBook, setStoreBook, handleMarkAsRead, wishList, setWishList, handleWishList
    };
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;