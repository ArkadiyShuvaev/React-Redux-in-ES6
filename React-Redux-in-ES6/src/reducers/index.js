import { combineReducers } from "redux";
import Courses from "./courseReducer";
import Authors from "./authorReducer";

const rootReducer = combineReducers({
    courses: Courses,
    authors: Authors
});

export default rootReducer;
