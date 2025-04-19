import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/ErrorPage/Errorpage';
import Home from '../pages/Home/Home';

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
            
        }
      ]
    },
  ]);