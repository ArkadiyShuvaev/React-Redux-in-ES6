import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";

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
        this.props.dispatch(CourseActions.createCourse(this.state.course));
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

const mapStateToProps = (state) => { return { courses: state.courses } };
//const mapStateToProps = (dispatch) => {
//    return {
//        loadCourses: () => {
//            dispatch(loadCourses());
//        }
//    }
//};
export default connect(mapStateToProps)(CoursesPage);
