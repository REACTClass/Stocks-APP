import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Dashboard from "./Dashboard";
import Stock from "./Stock"

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
            <Route path="/stocks" element={<Dashboard />} />
            <Route path="/stocks/:symbol" element={<Stock />} />
        </Routes>
        </div>
    )
}