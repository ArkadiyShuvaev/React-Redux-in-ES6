import Expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import CourseForm from "./CourseForm.jsx";

function setup(isSaving = false) {
    const props = {
        course: {},
        isSaving: isSaving,
        errors: {},
        onSave: () => { },
        onChange: () => { }
    };
    const renderer = TestUtils.createRenderer();
    // ...props -> course: course, isSaving: isSaving
    renderer.render(<CourseForm {...props} />); 
    const output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe("CourseForm via React Test Utils", () => {
    it("renders form and h1", () => {
        const { output } = setup();
        Expect(output.type).toBe("form");

        const [h1] = output.props.children;
        Expect(h1.type).toBe("h1");
    });

    it("save button is labeled \"Save\" when not saving", () => {
        const { output } = setup();
        const submitBtn = output.props.children[5];
        Expect(submitBtn.props.value).toBe("Save");
    });

    it("save button is labeled \"Saving\" when saving", () => {
        const { output } = setup({ isSaving: true });
        const submitBtn = output.props.children[5];
        Expect(submitBtn.props.value).toBe("Saving...");
    });
});
