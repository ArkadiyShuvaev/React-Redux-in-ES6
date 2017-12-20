import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";
import CourseList from "./CourseList.jsx";

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
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
            dispatch(CourseActions.createCourse(course));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
