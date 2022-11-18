import * as reducers from "./Reducers.js";
import { combineReducers } from "redux";

const Reducer = combineReducers({
  NEWS: reducers.NewsReducer,
});
export default Reducer;
