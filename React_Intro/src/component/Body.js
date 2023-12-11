import RestaurantCard from "./RestaurantCard";
//Named import
import { restaurants } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    //local Varable
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    function filterRestaurent(searchText, restaurantList){
        return restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    useEffect(() =>{
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const restaurant = await data.json();
        console.log(restaurant);
        setAllRestaurants(restaurant?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents(restaurant?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    //conditional rendering
    //If restaurant is empty--> show shimmer UI
    //If restaurant is not empty --> show actual data.

    if(!allRestaurants){
        return (<h1>Restaurant is not open....</h1>);
    }

    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
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
            <button className="search-btn" type = 'submit' onClick={() =>{
                const data = filterRestaurent(searchText, allRestaurants);
                setFilteredRestaurents(data);
                }}>Search
            </button>

        </div>
            <div className="resturant-list">
                {  (filteredRestaurents.length === 0)  ?
                        <h1>No Restaurant is matching with your filter!</h1>
                        : 
                        (filteredRestaurents.map(restaurant => {
                            return <RestaurantCard {...restaurant.info} key = {restaurant.info.id}/>
                        }))
                    
                }
            </div>  
        </>
    );
};

export  default Body;