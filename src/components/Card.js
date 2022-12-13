import React from "react"



export default function Card(props){
    return (
        <div className="card">
            <div className="cardBadge">SOLD OUT</div>
            <img src={`../assets/${props.img}`}  className="cardImage"></img>
            <div className="cardStats">
                <img src="../assets/star.png" className="cardStar"></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="cardTitle">{props.title}</p>
            <p className="cardPrice"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}