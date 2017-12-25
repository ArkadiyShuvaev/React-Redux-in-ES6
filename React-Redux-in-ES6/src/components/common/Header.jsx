import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import LoadingDots from "./LoadingDots";

const header = ({ isLoading }) => {

    var preloader = isLoading > 0
        ? (<LoadingDots interval={100} dots={20} />)
        : null;

    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
            {preloader}
        </nav>
    );
};

header.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default header;
