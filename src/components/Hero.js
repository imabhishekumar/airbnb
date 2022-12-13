import React from "react"
import photoGrid from "../assets/photo-grid.svg"

export default function Hero(){
    return(
        <section className="hero">
            <img src={photoGrid} className="heroPhoto"></img>
            <h1 className="heroHeader">Online Experiences</h1>
            <p className="heroText">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}