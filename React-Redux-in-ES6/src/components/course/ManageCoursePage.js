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
        }; //authors: Object.assign([], this.props.authors),
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
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
        loadAuthors: () => {
            dispatch(AuthorActions.loadAuthors());
        }
    };
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
