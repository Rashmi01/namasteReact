import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

//use State -> local state variable
 const [listofRestaurant, setListofRestaurant] = useState([]);
 const [searchText, setsearchText] = useState("");
 const [filteredRestaurant, setFilteredRestaurant] = useState([]);

 useEffect(()=>{
    console.log("useEffect called");
    fetchData();
 },[])

 const fetchData = async () =>{
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.893834148170379&lng=77.66156052932544&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log("data", json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }


 function filterData(searchText, listofRestaurant) {
    const filterData = listofRestaurant.filter((res) => 
        res.info.name.toLowerCase().includes(searchText)
    )
    return filterData;
 }

 console.log("Body is rendered ");
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


    return listofRestaurant.length === 0 ? <Shimmer /> :(
        <div className="body">
            <div className="search-container"> 
                <input 
                 type="text" 
                 className="search-input"
                 placeholder="search"
                 value={searchText}
                 onChange={(e)=> {
                    setsearchText(e.target.value)
                 }}
                />
                <button
                 className="search-btn"
                 onClick={(e) => {
                    //need to filter data
                    const filtered = filterData(searchText, listofRestaurant);
                    //update the restaurants
                    setFilteredRestaurant(filtered);
                 }}>
                    Search
                </button>
            </div>

            <div className="res-container">
            {
                filteredRestaurant.map((restaurant)=>(
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))
            }
            </div>
        </div>
    );
  }

  export default Body