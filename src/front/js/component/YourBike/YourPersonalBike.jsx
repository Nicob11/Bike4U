import React from "react";
import "./YourParts.css";



const YourPersonalBike = ({image, link, title, next, back, bike}) => {

    return (
        <>
        <div className="col">
        <div className="img-part">
            <img src={image} aria-label={title} className="part-img"  />
        </div>
        <div className="btns">
            <button className="customizeBikeBtn2" onClick={()=>back(bike)}>Before</button>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2">Learn More</button></a>
            <button className="customizeBikeBtn2"onClick={()=>next(bike)}>Next</button>
        </div>
        </div>
        </>

    );
}

export default YourPersonalBike;