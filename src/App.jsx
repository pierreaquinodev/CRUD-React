import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./Components/Layout/Container";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";

import Home from "./Components/Pages/Home";
import Company from "./Components/Pages/Company";
import NewProject from "./Components/Pages/NewProject";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";
import Project from "./Components/Pages/Project";

export default function App() {
  return (
    <Router>
        <Navbar/>
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/company" element={<Company/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/newproject" element={<NewProject/>} />
                    <Route path="/project/:id" element={<Project/>} />
                </Routes>
            </Container>
        <Footer/>
    </Router>
  );
}