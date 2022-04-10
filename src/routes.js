import React from "react";
import {
    Routes,
    Route
} from 'react-router-dom';

import Home from "./pages/Home/home";
import Vets from "./pages/Vets/vets";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vet" element={<Vets />} />
        </Routes>
    );
}