import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { useSelector } from "react-redux";

import Routes from './routes';

// COMPONENTS BASE
import Header from "./components/Header/header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/footer";
import Loading from "./components/Loading/styles";

// STYLE BASE
import "./styles/reset.css";
import "./styles/base.css";
import "./styles/fonts.css";

function App() {
    const loading = useSelector(state => state.loading);

    return (
        <Router>
            <Header />
            <Routes />
            <Toaster position="bottom-center" />
            <Footer />
            { loading
                ? <Loading><span>Carregando</span><div className="loader"><div></div><div></div></div></Loading>
                : false }
        </Router>
    )
}

export default App;