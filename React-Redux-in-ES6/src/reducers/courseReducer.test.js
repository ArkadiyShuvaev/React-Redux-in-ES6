import Expect from "expect";
import CourseReducer from "./courseReducer";

describe("Course Reducer", () => {
    it("should handle actions when passed CREATE_COURSE_SUCCESS", () => {
        const initialState = [{
                id: "react-creating-reusable-components",
                title: "Creating Reusable React Components",
                watchHref: "http://pluralsight.com/courses/react-creating-reusable-components",
                authorId: "cory-house",
                length: "6:20",
                category: "JavaScript"
            }];

        const action = {
            type: "CREATE_COURSE_SUCCESS",
            courses: [
                {
                    id: "react-flux-building-applications",
                    title: "Building Applications in React and Flux",
                    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
                    authorId: "cory-house",
                    length: "5:08",
                    category: "JavaScript"
                }]
        };

        const expectedState = [
                {
                    id: "react-creating-reusable-components",
                    title: "Creating Reusable React Components",
                    watchHref: "http://pluralsight.com/courses/react-creating-reusable-components",
                    authorId: "cory-house",
                    length: "6:20",
                    category: "JavaScript"
                }, {
                    id: "react-flux-building-applications",
                    title: "Building Applications in React and Flux",
                    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
                    authorId: "cory-house",
                    length: "5:08",
                    category: "JavaScript"
                }];

        const state = CourseReducer(initialState, action);

        Expect(state.courses).toEqual(expectedState.courses);
    });
});
