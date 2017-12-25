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

function mapStateToProps(state, ownProps) {
    let course = { id: "", watchHref: "", title: "", authorId: "", length: "", category: "" };

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
