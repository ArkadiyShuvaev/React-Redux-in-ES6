import Expect from "expect";
import * as CourseActions from "./courseActions";
import * as Types from "./actionTypes";

import Nock from "nock";
import Thunk from "redux-thunk";
import ConfigureMockStore from "redux-mock-store";

const middleware = [Thunk];
const mockStore = ConfigureMockStore(middleware);

describe("Async Actions", () => {
    afterEach(() => {
        Nock.cleanAll();
    });

    // done - it is a callback function. Call this function
    // when async work is complete
    it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses",
        (done) => {
        // Here's an example call to nock.
        // nock('http://example.com/') <- trap any HTTP calls
        //   .get('/courses')
        //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory',
        //                                                   lastName: 'House' }] }});

        const expectedActions = [
            { type: Types.BEGIN_ASYNC_CALL },
            { type: Types.LOAD_COURSES_SUCCESS,
                body: { courses: [{ id: "clean-code", title: "Clean Code" }]
                }
            }
        ];

        const store = mockStore({ courses: [] }, expectedActions);

        store.dispatch(CourseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            Expect(actions.length).toEqual(2);
            Expect(actions[0].type).toEqual(Types.BEGIN_ASYNC_CALL);
            Expect(actions[1].type).toEqual(Types.LOAD_COURSES_SUCCESS);
            done(); // tells Mocha async work is complete
        });
    });
});
