import React from "react"
import Vector from "../assets/Vector.svg"
//import "./styles.css"

export default function Navbar(){
    return(
        <nav>
            <img src={Vector} className="nav_logo"></img>
        </nav>
    )
}