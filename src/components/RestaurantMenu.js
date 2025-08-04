import {useState,  useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);


    console.log("resInfo",resInfo);
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    console.log("resInfo MenuCards",itemCards);
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    return resInfo === null ? <Shimmer /> :
    (
        <div className="menu"> 
            <h1> {name}</h1>
            <h3> {cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {itemCards[0]?.card?.info?.defaultPrice/100}</li> )}
            </ul>
        </div>
    )
}
export default RestaurantMenu