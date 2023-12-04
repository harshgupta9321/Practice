import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
// import Error from "./Error";
import About from "./About"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


const App=()=>{
    return(
    <>
        <Router>
        <Navbar/>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home/>} />
           
           </Routes>
           <Footer/>
        
        </Router>
    </>
    );
}

export default App;