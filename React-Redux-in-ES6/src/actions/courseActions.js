import * as CreateActions from "./actionTypes";
import CourseApi from "../api/mockCourseApi";

export function createCourse(course) {
    return { type: CreateActions.CREATE_COURSE, course }; // course: course
}

function loadCoursesSuccess(courses) {
    return { type: CreateActions.LOAD_COURSES_SUCCESS, courses };
}

function saveCourseSuccess(course) {
    return { type: CreateActions.SAVE_COURSE_SUCCESS, course };
}

function updateCourseSuccess(course) {
    return { type: CreateActions.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    
    return (dispatch) => {
        CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    // getState is for the cases where you are wanting to access
    // Redux store and get particular pieces of state w/o having
    // to pass it in as a parameter
    return (dispatch, getstate) => {
        CourseApi.saveCourse(course).then(savedCourse => {
            if (course.id) {
                dispatch(updateCourseSuccess(savedCourse));   
            } else {
                dispatch(saveCourseSuccess(savedCourse));
            }
        }).catch(error => {
            throw(error);
        });
    };
}
