import React, { useLayoutEffect } from 'react'
 import '../homecom/main1.css'
 import pahad from "../../assets/p.png"
 import camera from "../../assets/c.png"
 import leaf from "../../assets/l.png"

const Main1 =() =>{
    return (
<>
    <div className="body1">
            <h1 id="h91">Explore The </h1>
            <h1 id="h12">Beautiful World</h1>
            <p>Discover amazing places at exclusive deals <br/>
            and enjoy the beauty of nature.</p>
       <div className="body12"> 
        <button id="b1">Get Start</button>
        <button id="b2">Learn More</button>
        </div>
    </div>
    <section className="lop">

        <div className="p1">
            <img src={pahad} />
            <h1>Adevture</h1>
            <p>find threlling adventure<br/>
            and explore new places</p>

        </div>
        
            <div className="p1">
                <img src={camera}
                alt="camera" 
                />
                <h1>Tour Guide</h1>  
                <p>Professional guides to<br/>
                make your journey safe</p>    
            </div>

                <div className="p1">
                    <img src={leaf}
                    alt="leafe" 
                    />
                    <h1>Affordable</h1>
                    <p>Best packages and price<br/>
                    for unforgetable trips</p>
                </div>
        </section>

            
</>
    )
}
export default Main1;