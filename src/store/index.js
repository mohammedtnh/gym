import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchClasses } from "./actions/ClassActions";
import { fetchGyms } from "./actions/GymActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchGyms());
store.dispatch(fetchClasses());
store.dispatch(checkForToken());

export default store;
