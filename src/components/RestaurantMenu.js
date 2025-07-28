import {useState,  useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import { MENU_URL } from "../utils/constant"


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    console.log("paramas are",resId)
    useEffect (() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+ resId)
        const json = await data.json()
        console.log(json.data);
        setResInfo(json.data);    
    }

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