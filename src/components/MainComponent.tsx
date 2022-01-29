import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Project from "./Project";
import BuddyBots from "./Project/BuddyBots";
import About from "./About";
import MintCompleted from "./Mint/MintCompleted";

const MainComponent = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/buddy_bots" element={<BuddyBots />} />
        <Route path="/about" element={<About />} />
        <Route path="/mint_completed" element={<MintCompleted />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default MainComponent;
