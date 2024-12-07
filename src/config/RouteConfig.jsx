import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import ProductInfo from "../pages/ProductInfo.jsx";
function RouteConfig() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productinfo/:id" element={<ProductInfo />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default RouteConfig;