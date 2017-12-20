import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers";
import ReduxImmutableStateInvariant from "redux-immutable-state-invariant";
import Thunk from "redux-thunk";

export default function configureStore(initialState) {
    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(Thunk, ReduxImmutableStateInvariant())
    );
}
