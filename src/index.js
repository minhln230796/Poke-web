import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./views/layout/Layout";
import Home from "./views/Home";
import Detail from "./views/Detail";
import MyBag from "./views/MyBag";
import store from './store/store'
import { Provider } from 'react-redux'
import 'bootstrap'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "detail/:id",
                element: <Detail/>
            },
            {
                path: "my-bag",
                element: <MyBag/>
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
