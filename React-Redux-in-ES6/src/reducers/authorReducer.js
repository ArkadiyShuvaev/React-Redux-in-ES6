import * as ActionTypes from "../actions/actionTypes";
import InitialState from "./initialState";

export default function authorReducer(previousState = InitialState.authors, action) {
    switch (action.type) {
        case ActionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        
        default:
            return previousState;
    }
}
