import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    getCourse(c, index) {
        return (<div key={index}>{c.title}</div>);
    }

    createCourseRows(courses) {
        const result = [];
        for (let i = 0; i < courses.length; i++) {
            result.push(this.getCourse(courses[i], i));
        }

        return result;
    }


    render() {
        
        return (
            <div>
                <h1>Courses</h1>
                {this.createCourseRows(this.props.courses)}
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
