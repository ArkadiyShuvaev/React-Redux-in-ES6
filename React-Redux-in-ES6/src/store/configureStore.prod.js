import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../reducers";
import Thunk from "redux-thunk";

export default function configureStore(initialState) {
    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(Thunk)
    );
}
