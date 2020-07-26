import { INCREMENT, DECREMENT, RESET } from "./countActions";

const initialState = {
  count: 0
}

const countReducer = (state = initialState, action) => {
  // console.log('Reducer', state, action);
  switch(action.type) {
    case INCREMENT: 
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count -1
      };
    case RESET: 
      return {
        ...state,
        count: 0
      };
    default:
      return state
  } 
}

export default countReducer;