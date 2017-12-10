import "babel-polyfill";
import React from "react";
import ReactDom from "react-dom";
import Routes from "./routes";
import {Router, browserHistory } from "react-router";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById("app")
);
