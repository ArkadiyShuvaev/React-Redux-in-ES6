import React, { PropTypes } from "react";

class CoursesPage extends React.Component {

    getDefaultState() {
        return {
            course: { title: "" }
        };
    }

    constructor(props, context) {
        super(props, context);

        this.state = this.getDefaultState();
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onChange() {
        alert(`The ${this.state.course.title} course has been saved`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>

                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input
                    type="submit"
                    onClick={this.onChange}
                    value="Save" />

            </div>
        );
    }
}


export default CoursesPage;
