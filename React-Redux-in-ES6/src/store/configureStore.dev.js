import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../reducers";
import ReduxImmutableStateInvariant from "redux-immutable-state-invariant";
import Thunk from "redux-thunk";

const composeEnhancers =
    typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(Thunk, ReduxImmutableStateInvariant())
);

export default function configureStore(initialState) {
    return createStore(
        RootReducer,
        initialState,
        enhancer
    );
}
