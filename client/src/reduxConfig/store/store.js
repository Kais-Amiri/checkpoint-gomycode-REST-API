import { createStore, applyMiddleware, compose } from "redux";
import reducersCombination from "../reducers/combineReducers";
import thunk from "redux-thunk";

const store = createStore(
  reducersCombination,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
