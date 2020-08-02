import { createStore, combineReducers } from "redux";
import loaderReducer from "./loader/reducer";
import ordersReducer from "./orders/reducer";

const allReducers = combineReducers({
  loader: loaderReducer,
  orders: ordersReducer,
});

const store = createStore(allReducers);

export default store;
