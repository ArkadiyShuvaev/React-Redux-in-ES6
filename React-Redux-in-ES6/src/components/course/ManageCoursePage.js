import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";
import * as AuthorActions from "../../actions/authorActions";
import CourseForm from "./CourseForm.jsx";


class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={[]}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    let course = { id: "", watchHref: "", title: "", authorId: "", length: "", category: "" };

    return { course: course };
}

function mapDispatchToProps(dispatch) {
    return {
        loadAuthors: () => {
            dispatch(AuthorActions.loadAuthors());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
