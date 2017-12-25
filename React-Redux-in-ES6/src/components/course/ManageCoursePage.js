import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";
//import * as AuthorActions from "../../actions/authorActions";
import CourseForm from "./CourseForm.jsx";


class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        /* React may call this method even if the props have not changed,
            so make sure to compare the current and next values if you only
            want to handle changes. This may occur when the parent component
            causes your component to re-render.
        */
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        const course = Object.assign({}, this.state.course); // avoid mutating state
        course[field] = event.target.value;
        this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.saveCourse(this.state.course);
        this.context.router.push("/courses");
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
            />
        );
    }
}

function getCourseById(courses, courseId) {
    const result = courses.filter(c => c.id === courseId);
    if (result.length >= 1) {
        return result[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; // from the path `/course/:id`

    let course;
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    } else {
        course = { id: "", watchHref: "", title: "", authorId: "", length: "", category: "" };
    }
    

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveCourse: (course) => {
            dispatch(CourseActions.saveCourse(course));
        }
    };
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    saveCourse: PropTypes.func.isRequired
};

//Pull in the React Router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
