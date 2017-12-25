import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Header from "./common/Header.jsx";

class App extends React.Component {
    
    render() {
        return (
            <div className="container-fluid">
                <Header isLoading={this.props.isLoading}  />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};
const mapStateToProps = (state) => {
    return {
        isLoading:
            state.ajaxCallsInProgressCount > 0
    };
};
export default connect(mapStateToProps)(App);
