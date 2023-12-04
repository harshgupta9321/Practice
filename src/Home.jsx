import React from "react";
import web from "../src/images/3714960.jpg"
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=()=>{
    return(
        <>
           <Common name="Grow Your Business With " visit="/service" btnname="Get Started" imgsrc={web}/>

        </>
    )
}
export default Home;