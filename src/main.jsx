import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './Mainlayout/Mainlayout.jsx';
import Home from './Pages/Home/Home.jsx';
import SingleBrand from './Pages/Single/SingleBrand';
import Addproduct from './Pages/Addproduct/Addproduct';
import SingleProduct from './Pages/Single/SingleProduct';
import Mycart from './Pages/Mycart/Mycart.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import ProductEdit from './Components/ProductEdit/ProductEdit';
import ErrorPage from './ErrorPage';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element : <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
        loader : ()=> fetch('http://localhost:5000/products')
      },
      
      {
        path: "/addproduct",
        element: <PrivateRoute><Addproduct></Addproduct></PrivateRoute>
      },
      {
        path: "/mycart",
        element: <Mycart></Mycart>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/productedit/:id",
        element: <PrivateRoute><ProductEdit></ProductEdit></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </React.StrictMode>,
)
