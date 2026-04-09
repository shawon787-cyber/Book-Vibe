import React, { createContext, useState } from 'react';

export const BookContext = createContext()
const BookProvider = ({children}) => {
    const [storeBook, setStoreBook] = useState([]);
const handleMarkAsRead = (currentBook) => {
    // console.log(currentBook);
    const isExistBook = storeBook.find(book => book.bookId == currentBook.bookId)
    if(isExistBook){
      alert("The book is already exist")
    }
    else{
      setStoreBook([...storeBook, currentBook])
      alert(`${currentBook.bookName} is added to list`)
    }
  };
    const data = {
        storeBook, setStoreBook, handleMarkAsRead,
    };
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;