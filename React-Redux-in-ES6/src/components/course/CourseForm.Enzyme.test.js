import Expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import CourseForm from "./CourseForm.jsx";

function setup(isSaving = false) {
    const props = {
        course: {},
        isSaving: isSaving,
        errors: {},
        onSave: () => { },
        onChange: () => { }
    };
    return shallow(<CourseForm {...props} />);
}

describe("CourseForm via Enzyme", () => {
    it("renders form and h1", () => {
        const wrapper = setup();
        Expect(wrapper.find("form").length).toBe(1);
        Expect(wrapper.find("h1").text()).toEqual("Manage Course");
    });

    it("save button is labeled \"Save\" when not saving", () => {
        const wrapper = setup();
        Expect(wrapper.find("input").props().value).toBe("Save");
    });

    it("save button is labeled \"Saving\" when saving", () => {
        const wrapper = setup({ isSaving: true });
        Expect(wrapper.find("input").props().value).toBe("Saving...");
    });
});
