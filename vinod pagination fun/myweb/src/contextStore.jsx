import { reducer } from "./Reducer";
import { createContext, useContext, useReducer, useEffect } from "react";
export const DataPsser = createContext()


const API = `http://hn.algolia.com/api/v1/search?`
const initialValue = {
  isLoading: true,
  hits: [],
  page: 1,
  nbPages: 0,
  query: ''
}

// provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  async function fetchingData(url) {
    dispatch({ type: 'GET_LOADING' })

    try {
      const response = await fetch(url)
      const Data = await response.json();
      // console.log(Data.hits[0].author);
      console.log(Data);

      dispatch({
        type: 'GET_STORIES',
        payload: {
          nbPages: Data.nbPages,
          hits: Data.hits
        }
      })

    } catch (error) {
      console.log('error is : ' + error);

    }
  }

  // const conditons=(con)=>{
  //   dispatch({type:con, payload:state.page})
  // }
  const Moveon=()=>{
    dispatch({type:'SET_INCREMENT'})
  }

  const Back=()=>{
    dispatch({type:'SET_DECREMENT'})
  }

  const Serching = (ee)=>{
    dispatch({
      type: 'GET_SERSH',
      anyNAme:ee
    })
    // console.log(ee.target.value);
  }

const removeItem = (id) => {
  console.log(id);
  
    dispatch({
      type: 'GET_REMOVE',
      // payload:id <- mothod 1  >> 2 in under
      payload:{   
        id
      }
    })
  }

  useEffect(() => {
    fetchingData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page])


  return <DataPsser.Provider value={{ ...state,removeItem , Serching , Moveon, Back}}>{children}</DataPsser.Provider>
}

// import it LOCAL HOOK
export const GloablHook = () => {
  return useContext(DataPsser);
}