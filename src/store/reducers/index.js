import { combineReducers } from "redux";
import classReducer from "./classReducer";
import gymReducer from "./gymReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  classReducer,
  gymReducer,
});

export default rootReducer;
