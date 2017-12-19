import * as CreateActions from "./actionTypes";

export function createCourse(course) {
    return { type: CreateActions.CREATE_COURSE, course }; // course: course
}
