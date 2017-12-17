import { createStore, applyMiddleware } from "redux";
import RootReducer from "../redusers";
import ReduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(ReduxImmutableStateInvariant())
    );
}
