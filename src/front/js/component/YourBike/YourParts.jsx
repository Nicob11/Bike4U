import React, {useMemo, useState} from "react";
import "./YourParts.css";
import { addFavoritePart, deleteFavoritePart } from "../../utils/fetchFavorites.js";
import useStore from "../../store/AppContext.jsx";



const YourParts = ({image, link, title, next, back, part, id}) => {
    const {store, action} = useStore();
    const {userInfo, favorite} = store;
    const {setFavorite} = action;
    
    const handleFavoritePart = async (id) => {
        addFavoritePart(userInfo.id, id);
        setFavorite(true);
        if (favorite) {
            deleteFavoritePart(userInfo.id, id);
            setFavorite(false);
        }
    }


    return (
        <>
        <div className="col" id={id}>
        <div className="img-part">
            <img src={image} aria-label={title} className="part-img"  />
        </div>
        <div className="btns">
            <button className="customizeBikeBtn2" onClick={()=>back(part)}>Before</button>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2">Learn More</button></a>
            <button className="customizeBikeBtn2"onClick={()=>next(part)}>Next</button>
            <button id={id} className="customizeBikeBtn2" onClick={()=> handleFavoritePart(id)}>favorite</button>
        </div>
        </div>
        </>

    );
}

export default YourParts;

