import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/ErrorPage/Errorpage';
import Home from '../pages/Home/Home';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import PageRead from '../pages/PageRead/PageRead';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            index: true,
            loader:()=>fetch('../booksData.json'),
            path: "/",
            Component: Home,
            hydrateFallbackElement: <p>loading.....</p>
            
        },
        {
           path: "/bookDetails/:id",
           Component: BookDetails,
           loader:()=>fetch('../booksData.json'),
           hydrateFallbackElement: <p>loading.....</p>
        },
        {
          path: "/listedBooks",
          Component: ListedBooks
        },
        {
          path: "/pageRead",
          Component: PageRead
        }
      ]
    },
  ]);