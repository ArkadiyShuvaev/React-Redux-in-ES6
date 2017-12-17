import { combineReducers } from "redux";
import Courses from "./courceReducer";

const rootReducer = combineReducers({
    courses: Courses
});

export default rootReducer;
