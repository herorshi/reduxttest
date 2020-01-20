import { combineReducers } from 'redux';


const reducer1 = (state = 1, action) => {
    switch (action.type) {
      case "ADD":
        return action.number;
        break;
  
      default:
        break;
    }
    return state;
  };
  const reducer2 = (state = 2, action) => {
    switch (action.type) {
      case "GET":
        break;
  
      default:
        break;
    }
    return state;
  };


export default function createReducer(asyncReducers) {
  return combineReducers({
    // reducer1,
    // reducer2,
    ...asyncReducers
  });
}