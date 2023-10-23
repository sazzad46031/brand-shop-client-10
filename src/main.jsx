import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './Mainlayout/Mainlayout.jsx';
import Home from './Pages/Home/Home.jsx';
import Addproduct from './Pages/Addproduct/Addproduct.jsx';
import Mycart from './Pages/Mycart/Mycart.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('data.json')
      },
      {
        path: "/addproduct",
        element: <Addproduct></Addproduct>
      },
      {
        path: "/mycart",
        element: <Mycart></Mycart>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
