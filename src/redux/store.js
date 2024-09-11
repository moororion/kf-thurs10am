import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const initialCartState = {
  pizzas: [],
  total: 0,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        pizzas: action.payload.pizzas,
        total: action.payload.total,
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    cart: cartReducer,
  }),
  applyMiddleware(logger)
);

export default store;
