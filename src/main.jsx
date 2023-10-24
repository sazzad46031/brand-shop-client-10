import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './Mainlayout/Mainlayout.jsx';
import Home from './Pages/Home/Home.jsx';
import SingleBrand from './Pages/Single/SingleBrand';
import Addproduct from './Pages/Addproduct/Addproduct';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/brands/:id",
        element : <SingleBrand></SingleBrand>,
        loader : ()=> fetch('http://localhost:5000/brands')
      },
      {
        path: "/products/:id",
        element : <SingleBrand></SingleBrand>,
        loader : ()=> fetch('http://localhost:5000/products')
      },
      
      {
        path: "/addproduct",
        element: <Addproduct></Addproduct>
      }
      // {
      //   path: "/mycart",
      //   element: <Mycart></Mycart>
      // },
      // {
      //   path:"/login",
      //   element: <Login></Login>
      // },
      // {
      //   path: "/register",
      //   element: <Register></Register>
      // },
      // {
      //   path : "/products/:id",
      //   element: <ProductPage></ProductPage>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
