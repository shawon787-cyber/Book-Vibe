import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Homepage from '../Pages/Homepage/Homepage'
import Books from '../Pages/Books/Books'
import Errorpage from '../Pages/ErrorPage/Errorpage'


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
      element: <Books></Books>
    }
  ],
  errorElement: <Errorpage></Errorpage>
  },
 
])