import { combineReducers } from "redux";
import Courses from "./courseReducer";

const rootReducer = combineReducers({
    courses: Courses
});

export default rootReducer;
