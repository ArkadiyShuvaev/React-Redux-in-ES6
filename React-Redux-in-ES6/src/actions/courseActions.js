import * as CreateActions from "./actionTypes";
import CourseApi from "../api/mockCourseApi";

export function createCourse(course) {
    return { type: CreateActions.CREATE_COURSE, course }; // course: course
}

function loadCoursesSuccess(courses) {
    return { type: CreateActions.LOAD_COURSES_SUCCESS, courses };
};

export function loadCourses() {
    
    return (dispatch) => {
        CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}
