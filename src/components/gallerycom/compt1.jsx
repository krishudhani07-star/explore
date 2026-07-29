import React from "react"
import '../gallerycom/gallery.css'
import bot from "../../assets/bot.jpg"
import wat from "../../assets/wat.jpg"
import bea from "../../assets/bea.png"
import pah from "../../assets/pah.png"
import str from "../../assets/str.png"
import ball from "../../assets/ball.png"
const Compt1 =() =>{
    return (
        <>
         <div className="oolp">

            <h1>Our Gallery</h1>
            <p>Take a look some of the amazing places<br/>we have explored</p>
        
            <img src={bot} height="183" width="30%"/>
            <img src={wat} height="183" width="30%"/>
            <img src={bea} height="183" width="30%"/>
            <img src={pah} height="174" width="30%"/>
            <img src={str} height="174" width="30%"/>
            <img src={ball} height="174" width="30%"/>
        </div>
        <button>View More</button>
        </>
    )
}
export default Compt1;