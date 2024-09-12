import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const getPizzaPost = (state = [], action) => {
  if(action.type === "ADD_THE_PIZZA"){
    return [action.payload]
  }
  
  return state;
};


const store = createStore(
  combineReducers({
    getPizzaPost, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
