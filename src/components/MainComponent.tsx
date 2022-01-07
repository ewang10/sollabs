import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Project from "./Project";
import Solman from "./Project/Solman";
import About from "./About";

class MainComponent extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/projects/solman" element={<Solman />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        )
    }
}

export default MainComponent;
