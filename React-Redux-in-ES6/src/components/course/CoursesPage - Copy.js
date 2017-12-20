import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {

    constructor
    (props, context) {
        super(props, context);

        this.state = this.getDefaultState();
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getDefaultState() {
        return {
            course: { title: "" }
        };
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onChange() {
        this.props.createCourse(this.state.course);
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

        //return courses.map((c, index) => {
        //    return <div key={index}>{c.course.title}</div>;
        //});
    }


    render() {
        
        return (
            <div>
                <h1>Courses</h1>
                <div>
                    {this.createCourseRows(this.props.courses)}
                </div>

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
