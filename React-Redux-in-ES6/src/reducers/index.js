import { combineReducers } from "redux";
import Courses from "./courseReducer";
import Authors from "./authorReducer";
import AjaxCallsInProgressReducer from "./ajaxStatusReducer";

const rootReducer = combineReducers({
    courses: Courses,
    authors: Authors,
    ajaxCallsInProgressCount: AjaxCallsInProgressReducer
});

export default rootReducer;
