import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Homepage from '../Pages/Homepage/Homepage'
import Books from '../Pages/Books/Books'
import Errorpage from '../Pages/ErrorPage/Errorpage'
import BookDetails from '../Pages/BookDetails/BookDetails'


export const router = createBrowserRouter([
  {
  path: "/",
  element: <MainLayout></MainLayout>,
  children: [
    {
      index: true,
      element: <Homepage></Homepage>
    },
    {
      path: "/books",
      element: <Books></Books>,

      
    },
    {
      path:"/bookDetails/:bookId",
      Component: BookDetails,
      loader: ()=> fetch("/public/booksData.json")
    }
  ],
  errorElement: <Errorpage></Errorpage>
  },
 
])