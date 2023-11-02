import RestaurantCard from "./RestaurantCard";
//Named import
import { restaurants } from "../constants";
import { useState } from "react";
const Body = () => {

    //local Varable
    const [searchText, setSearchText] = useState("");
    const [restaurentList, setRestaurentList] = useState(restaurants);
    function filterRestaurent(searchText, restaurantList){
        return restaurantList.filter((restaurant) => restaurant.info.name.includes(searchText));
    }

    return(
        <>
        <div className="search-container">
            <input
            className="input-text"
            type = "text"
            placeholder="Serach..."
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value)}
            }
            >
            </input>
            <button className="search-btn" onClick={() =>{
                const data = filterRestaurent(searchText, restaurentList);
                setRestaurentList(data);
                }}>Search
            </button>

        </div>
            <div className="resturant-list">
                {
                    restaurentList.map(restaurant => {
                        return <RestaurantCard {...restaurant.info} key = {restaurant.info.id}/>
                    })
                }
            </div>  
        </>
    );
};

export  default Body;