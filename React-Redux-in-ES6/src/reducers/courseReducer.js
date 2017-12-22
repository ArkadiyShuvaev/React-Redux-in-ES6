import * as CreateActions from "../actions/actionTypes";
import InitialState from "./initialState";

export default function courseReducer(state = InitialState.courses, action) {
    switch (action.type) {
        case CreateActions.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];

        case CreateActions.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}
