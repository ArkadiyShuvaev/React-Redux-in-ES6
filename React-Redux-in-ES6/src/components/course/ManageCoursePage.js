import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../actions/courseActions";


class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { course } = this.props;
        return (
            <div>
                <h1>Manage Course</h1>

            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return { course: state.course };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => {
            dispatch(CourseActions.createCourse(course));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
