import React from "react";
import  ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import Body from "./component/Body";
import Footer  from "./component/Footer";






// option chaining (?)
// const RestrauntCard = (props) => {
//     console.log(props);
//     return(
//         <div className="card">
//             <img alt = "food_image" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.info?.cloudinaryImageId}/>
//             <h2>{props.restaurant.info?.name}</h2>
//             <h3>{props.restaurant.info?.cuisines.join(", ")}</h3>
//             <h4>{props.restaurant.info?.avgRating} stars </h4>  
//         </div>
//     )
// };

//Object destructuring for cleaner code.

// const RestrauntCard = ({restaurant}) => {
//     const{cloudinaryImageId, name, cuisines, avgRating} = restaurant.info;
//     return(
//         <div className="card">
//             <img alt = "food_image" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(", ")}</h3>
//             <h4>{avgRating} stars </h4>  
//         </div>
//     )
// };


const AppLayout = () =>{
    return(
        <React.Fragment>
            <HeaderComponent />
            <Body />
            <Footer />
        </React.Fragment>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<AppLayout />)