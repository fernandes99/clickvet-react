import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles/reset.css";
import "./styles/base.css";

import Home from "./pages/Home/home";
export default class App extends React.Component {
    render() {
        return (
            <Home />
        )
    }
}
const item = document.getElementById('app');
ReactDOM.render(<App />, item);