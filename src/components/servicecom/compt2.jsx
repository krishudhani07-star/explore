import react from "react";
import "./Serviccompt.css"
import are from "../../assets/are.png"
import bul from "../../assets/bul.png"
import car from "../../assets/car.png"
import flg from "../../assets/flg.png"

const Compt2=()=>{
    return(
        <>
        <section className="lpok">
            <div id="lpo">
                <img className="a1" src={are} />
                <h1>Flight Booking</h1>
                <p>We offer the best flight<br/>option at the most<br/>affordable prices. </p>
            </div> 
             <div id="lpo">
                <img className="a1" src={bul} />
                <h1>Hotel Booking</h1>
                <p>From budget to luxury<br/>stay,we have it all<br/>
                for you.</p>
             </div>
              <div id="lpo">
                <img className="a1" src={car} />
                <h1>transport Guide</h1>
                <p>Comfortable and safe <br/>transport option<br/>anywhere you go</p>
              </div>
               <div id="lpo">
                <img className="a1" src={flg} />
                <h1>Travel Guide</h1>
                <p>Our guides make your<br/>journey more exciting<br/>and memorable</p>
               </div>
        </section>
        </>
    )
}
export default Compt2;