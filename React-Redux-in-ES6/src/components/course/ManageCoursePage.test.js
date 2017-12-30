import React from "react";
import Expect from "expect";
import { shallow, mount } from "enzyme";
import { ManageCoursePage } from "./ManageCoursePage";
import { itParam } from "mocha-param";


function setup() {
    let funcInfo = {
        isSaveCourseInvoked: false
}
    const props = {
        authors: [],
        course: {
            id: "", watchHref: "", title: "", authorId: "",
            length: "", category: ""
        },
        saveCourse: () => {
            funcInfo.isSaveCourseInvoked = true;
            return Promise.resolve();
        }
    };
    
    return {
        props,
        funcInfo
    }
}

const testTitle = ["", "a", "aa", "aaa", "aaaa", "1", "12", "123", "1234"];

describe("Manage Course Page", () => {

    itParam("saveCourse should not be invoked when trying to save title with 1, 2, 3 or 4 chars.", testTitle, (title) => {

        const { props, funcInfo } = setup();
        props.course.title = title;
        
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find("input").last();
        Expect(saveButton.prop("type")).toBe("submit");
        saveButton.simulate("click");

        Expect(funcInfo.isSaveCourseInvoked)
            .toBe(false);
    });

    itParam("sets error message when trying to save title with 1, 2, 3 or 4 chars.", testTitle, (title) => {
        const { props, funcInfo } = setup();
        props.course.title = title;
        
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find("input").last();
        Expect(saveButton.prop("type")).toBe("submit");
        saveButton.simulate("click");
        Expect(wrapper.state().errors.title)
            .toBe("Title must be at least 5 characters.");
    });
    
});
