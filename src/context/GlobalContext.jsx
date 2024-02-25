import React, { createContext, useEffect,useReducer,useState } from 'react';
import axios from 'axios';
import { cartReducer } from './Reducer';

export const appContext = createContext();


function GlobalContext({children}) {
  let [products,setProducts] = useState([]);
  async function getProducts(){
    let {data} = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(data);
  }
  useEffect (()=>{
    getProducts();
  },[]);

  const [state,dispatch] = useReducer(cartReducer,{
    cart:[],
  });
  return (
    <>
      <appContext.Provider value={{products,state,dispatch}}>
        {children}
      </appContext.Provider>
    </>
  )
}

export default GlobalContext