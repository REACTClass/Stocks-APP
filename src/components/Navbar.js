import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"

export default function Navbar() {
    return (
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
    )
}