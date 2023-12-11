import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating, areaName}) => {
    return(
        <div className="card">
            <img alt = "food_image" src = {IMG_CDN_URL + cloudinaryImageId}/>
            <div className = "card_name">{name}</div>
            <div className ="card_rating"><img className = "card_rating_img" alt = "star-image" src = {require("../../images/star.png")}></img>{avgRating} stars </div>  
            <div className="card_rel">{cuisines.join(", ")}</div>
            <div className="card_rel">{areaName}</div>
        </div>
    )
};

export default RestaurantCard;