import {applyMiddleware, createStore, compose} from "redux";
import Reducers from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(
    Reducers,
    undefined,
    compose(applyMiddleware(thunk))
);

export default store;