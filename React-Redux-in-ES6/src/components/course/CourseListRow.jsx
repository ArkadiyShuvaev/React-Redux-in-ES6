import React, { PropTypes } from "react";
import { Link } from "react-router";

const courseRow = (props) => {
    return (
        <tr key={props.course.id}>
            <td><a href={props.course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={"/course/" + props.course.id}>{props.course.title}</Link></td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td>
            <td>{props.course.length}</td>
        </tr>
    );
}

courseRow.propTypes = {
    course: PropTypes.object.isRequired
}

export default courseRow;
