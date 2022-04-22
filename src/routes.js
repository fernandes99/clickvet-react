import React from "react";
import {
    Routes,
    Route,
    useNavigate
} from 'react-router-dom';

import Home from "./pages/Home/home";
import VetList from "./pages/VetList/VetList";
import VetProfile from "./pages/VetProfile/vetProfile";

export default function MainRoutes() {
    const navigate = useNavigate();
    const basePath = global.mode === "production" ? '/' : '/';

    return (
        <Routes>
            <Route path={`${basePath}`} element={<Home navigate={navigate} />} />
            <Route path={`${basePath}/veterinarios/:city`} element={<VetList />} />
            <Route path={`${basePath}/veterinarios/:city/:vetId`} element={<VetProfile />} />
        </Routes>
    );
}