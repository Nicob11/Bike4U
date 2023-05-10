import React from "react";

import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./bikesCards.css"


const BikesCards = ({ image, title, description, link }) => {

    return (
        <>
            <div className="wrapperBikeCard">
            <div className="card mt-3 ms-5 ">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={link}>
                        <button>SABER MAS</button>
                    </Link>
                </div>
            </div>
            </div>
            
        </>
    );
}

export default BikesCards;