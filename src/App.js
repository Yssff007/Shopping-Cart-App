import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Layout from './components/Layout';


function App() {
  let routing  = createBrowserRouter([
    {path:'/', element: <Layout/>,
    children:[
      {index : true,element:<Shop/>},
      {path:'/Cart', element:<Cart/>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={routing}/>
    </>
  );
}

export default App;
