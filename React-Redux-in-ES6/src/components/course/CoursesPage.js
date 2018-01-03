import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";
import CourseList from "./CourseList.jsx";
import { browserHistory } from "react-router";

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push("/course");
    }

    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add course"
                    onClick={this.redirectToAddCoursePage}
                    className="btn btn-primary" />
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => {
            dispatch(CourseActions.createCourseSuccess(course));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
