import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"

import "./styles/reset.css";
import "./styles/base.css";
import "./styles/fonts.css";

import Routes from './routes';

import Header from "./components/Header/header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/footer";
export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Routes />
                <Toaster position="bottom-center" />
                <Footer />
            </Router>
        )
    }
}
const item = document.getElementById('app');
ReactDOM.render(<App />, item);