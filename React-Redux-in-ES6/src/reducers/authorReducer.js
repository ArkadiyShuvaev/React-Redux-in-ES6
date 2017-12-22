import * as ActionTypes from "../actions/actionTypes";
import InitialState from "./initialState";

export function authorReducer(previousState = InitialState.authors, action) {
    switch (action.type) {
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.authors;
        
        default:
            return previousState;
    }
}
