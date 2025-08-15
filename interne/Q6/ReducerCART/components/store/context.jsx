// import { reducer } from "./Reducer";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
export const DataPsser = createContext()


const API = 'https://dummyjson.com/carts'
const initialValue = {
  isLoading: true,
  carts: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_STORIES':
      return {
        ...state,
        carts: action.payload.carts
        // hits: action.payload.hits,
        // nbPages: action.payload.nbPages,
        // isLoading: false
      };
    case 'GET_REMOVE':
      return {
        ...state,
        carts: state.carts.filter((prestElem) => {
          return prestElem.id !== action.payload.id;
        })
      }
    case 'SET_CART':
      return {
        ...state,
        query: action.anyNAme
      }
    case 'GET_SERSH':
      return {
        ...state,
        query: action.anyNAme
      }
  }
}
// provider
export const AppProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialValue)
  const [mycart, setMyCart] = useState([])

  async function fetchingData() {
    // dispatch({ type: 'GET_LOADING' })

    try {
      const response = await fetch(API)
      const Data = await response.json();
      // console.log(Data);
      // console.log(Data.carts[0].products);

      let a = []
      Data.carts.map((s) => {
        s.products.map((p) => {
          // console.log(p);
          a.push(p)
        })
      })


      dispatch({
        type: 'GET_STORIES', payload: {
          carts: a
        }
      })



    } catch (error) {
      console.log('error is : ' + error);

    }
  }


  // console.log(state);

  // const conditons=(con)=>{
  //   dispatch({type:con, payload:state.page})
  // }


  const addToCart = (id,q) => {
    console.log(id);

    let b = state.carts.filter((prestElem) => {
      return prestElem.id === id && prestElem.quantity === q;
    })

    setMyCart(prevCart => [...prevCart, ...b]);
    console.log(mycart);

    // dispatch({ type: 'SET_CART' })
  }

  // const Back = () => {
  //   dispatch({ type: 'SET_DECREMENT' })
  // }

  // const Serching = (ee) => {
  //   dispatch({
  //     type: 'GET_SERSH',
  //     anyNAme: ee
  //   })
  //   // console.log(ee.target.value);
  // }

  const removeItem = (id) => {
    console.log(id);

    dispatch({
      type: 'GET_REMOVE',
      // payload:id <- mothod 1  >> 2 in under
      payload: {
        id
      }
    })
  }

  useEffect(() => {
    fetchingData();
  }, [])

  // , removeItem, Serching, Moveon, Back
  return <DataPsser.Provider value={{ ...state, removeItem, addToCart, mycart , setMyCart }}>{children}</DataPsser.Provider>
}

// import it LOCAL HOOK
export const GloablHook = () => {
  return useContext(DataPsser);
}