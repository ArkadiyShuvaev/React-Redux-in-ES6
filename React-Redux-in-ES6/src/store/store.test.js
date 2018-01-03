import Expect from "expect";
import { createStore } from "redux";
import RootReducer from "../reducers";
import InitialState from "../reducers/initialState";
import * as CourseActions from "../actions/courseActions";

describe("Store", () => {
    it("should handle creating courses", () => {
        const store = createStore(RootReducer, InitialState);
        const expectedCourse = {
            id: "react-creating-reusable-components",
            title: "Creating Reusable React Components",
            watchHref: "http://pluralsight.com/courses/react-components",
            length: "6:20",
            category: "JavaScript"
        };

        //act
        const action = CourseActions.createCourseSuccess(expectedCourse);
        store.dispatch(action);

        //assert
        const actualCourses = store.getState().courses;
        Expect(actualCourses.length).toBe(1);
        Expect(actualCourses[0]).toEqual(expectedCourse);
    });
});
