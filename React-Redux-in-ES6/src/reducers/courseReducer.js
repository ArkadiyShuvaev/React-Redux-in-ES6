import * as CreateActions from "../actions/actionTypes";
import InitialState from "./initialState";

export default function(state = InitialState.courses, action) {
    switch (action.type) {
        case CreateActions.LOAD_COURSES_SUCCESS:
            return action.courses;

        case CreateActions.SAVE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];

        case CreateActions.UPDATE_COURSE_SUCCESS:
            return [ // get all courses except the course that's being updated
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}
