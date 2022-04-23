import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Routes,
    Route,
    useNavigate
} from 'react-router-dom';

import Home from "./pages/Home/home";
import VetList from "./pages/VetList/VetList";
import VetProfile from "./pages/VetProfile/vetProfile";

export default function MainRoutes() {
    const states = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path='/' element={<Home navigate={navigate} />} />
            <Route path='veterinarios/:city' element={<VetList states={states} dispatch={dispatch}/>} />
            <Route path='veterinarios/:city/:vetId' element={<VetProfile />} />
        </Routes>
    );
}