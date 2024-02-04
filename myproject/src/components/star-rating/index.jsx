
import { useState } from "react"
import {FaStar} from "react-icons/fa"
import "./styles.css"
export default function  StarRating({noOfStar=5}) {
    const [index,setIndex]= useState(-1)
    const [pindex,setPindex]= useState(-1)
    return (
        <div className="star">
           { [...Array(noOfStar)].map( (_, i)  => { return <FaStar key={i} onClick={()=> setPindex(i)}  
           onMouseOver={()=> setIndex(i)} onMouseOut={()=> setIndex(-1)}   style={{color: (i<=index || i<=pindex) && "yellow"}}       />} ) }
    </div>
    )
}
