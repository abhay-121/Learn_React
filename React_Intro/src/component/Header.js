import { useState } from "react";

//Named export
export const Title = () => (
    <a href ="/">
        <img className="logo" alt = "logo" src = {require("../../images/food_villa_logo.jpg" )}/>
    </a>
)

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />            
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// Default export
export default HeaderComponent;