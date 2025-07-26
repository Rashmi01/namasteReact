import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

//use State -> local state variable
 const [listofRestaurant, setListofRestaurant] = useState(resList);

// normal js variable
let listofRestaurant2 =[
    {
        "info": {
        "id": "695635",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "c99aa4e68f6f6235e8aeb420932c13d7",
        "areaName": "HSR",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.3,
        "sla": {
        "deliveryTime": 32,
        }
        }
    },
    {
        "info": {
        "id": "695633",
        "name": "California Pizza",
        "cloudinaryImageId": "c99aa4e68f6f6235e8aeb420932c13d7",
        "areaName": "HSR",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 3.3,
        "sla": {
        "deliveryTime": 32,
        }
        }
    },
    {
        "info": {
        "id": "695634",
        "name": "Dominos Pizza",
        "cloudinaryImageId": "c99aa4e68f6f6235e8aeb420932c13d7",
        "areaName": "HSR",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.3,
        "sla": {
        "deliveryTime": 32,
        }
        }
    }
];


    return (
        <div className="body">
            <div className="filter"> 
                <button
                 className="filter-btn"
                 onClick={()=> {
                    const filteredList = listofRestaurant.filter(
                        (res) => res.info.avgRating > 4.3
                    )
                    console.log(filteredList);
                    setListofRestaurant(filteredList); 
                 }} 
                 > 
                 Top Rated Restaurants
                 </button>
            </div>

            <div className="res-container">
            {
                listofRestaurant.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
            </div>
        </div>
    );
  }

  export default Body