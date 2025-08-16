// import { reducer } from "./Reducer";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
export const DataPsser = createContext()


const API = 'https://dummyjson.com/carts'
const initialValue = {
  carts: [],
  mycarts: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODT':
      return {
        ...state,
        carts: action.payload.carts
      };
    case 'GET_MY-CART':
      let b = state.carts.filter((prestElem) => {
        return prestElem.id === action.payload.id && prestElem.quantity === action.payload.q;
      })
      return {
        ...state,
        mycarts: [...state.mycarts, ...b]
      };
    
    case 'RM_MY-CART':
      const rm = state.mycarts.filter((prestElem) => {
        return !(prestElem.id === action.payload.id && prestElem.quantity === action.payload.q);
      })
      return {
        ...state,
        mycarts: rm
      };

    case 'GET_REMOVE':
      return {
        ...state,
        carts: state.carts.filter((prestElem) => {
          return prestElem.id !== action.payload.id;
        })
      }
  }
}

// this is provider to export that onn mainapp
export const AppProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialValue)

  async function fetchingData() {

    try {
      const response = await fetch(API)
      const Data = await response.json();

      // let a = []
      // Data.carts.map((s) => {
      //   s.products.map((p) => {
      //     // console.log(p);
      //     a.push(p)
      //   })
      // })
      // // --------- log
      // console.log('try salam', a);

      const carts = Data.carts.flatMap(cart => cart.products);

      dispatch({
        type: 'GET_ALL_PRODT',
        payload: {
          carts: carts
        }
      })
      console.log('salam');


    } catch (error) {
      console.log('error is : ' + error);

    }
  }

  const addToCart = (id, q) => {
    console.log(id);
    dispatch({
      type: 'GET_MY-CART',
      payload: {
        id, q
      }

    })
    // let b = state.carts.filter((prestElem) => {
    //   return prestElem.id === id && prestElem.quantity === q;
    // })

    // setMyCart(prevCart => [...prevCart, ...b]);

  }
  // console.log(state.carts);



  useEffect(() => {
    fetchingData();
  }, [])

  return <DataPsser.Provider value={{ ...state, addToCart, dispatch }}>{children}</DataPsser.Provider>
}

// import it LOCAL HOOK
export const GloablHook = () => {
  return useContext(DataPsser);
}