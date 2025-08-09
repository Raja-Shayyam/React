export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_STORIES':
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false
      };
    case 'GET_REMOVE':
      return {
        ...state,
        hits: state.hits.filter((prestElem) => {
          return prestElem.objectID !== action.payload.id;
        })
      }
    case 'GET_SERSH':
      return {
        ...state,
        query: action.anyNAme
      }
    case 'SET_INCREMENT':
      return {
        ...state,
        page: state.page==state.nbPages-1 ? (state.page=0):(state.page + 1)
      }
    case 'SET_DECREMENT':
      return {
        ...state,
        page: state.page===0 ? (state.page=50):(state.page - 1)
      }
    default:
      break;
  }
}
