import React from "react";
import { useSelector } from "react-redux";
import {
    Routes,
    Route,
    useNavigate
} from 'react-router-dom';

import Home from "./pages/Home/home";
import VetList from "./pages/VetList/VetList";
import VetProfile from "./pages/VetProfile/VetProfile";

export default function MainRoutes() {
    const states = useSelector(state => state);
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path='/' element={<Home navigate={navigate} />} />
            <Route path='veterinarios/:city' element={<VetList /> } />
            <Route path='veterinarios/:city/:vetId' element={<VetProfile states={states} />} />
        </Routes>
    );
}