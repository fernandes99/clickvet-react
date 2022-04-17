import React from "react";
import {
    Routes,
    Route
} from 'react-router-dom';

import Home from "./pages/Home/home";
import VetList from "./pages/VetList/VetList";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vets" element={<VetList />} />
        </Routes>
    );
}