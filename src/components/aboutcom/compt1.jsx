 import React from "react"
 import "../aboutcom/about.css"
 import wri from "../../assets/w.png"
 import xls from "../../assets/x.png"
 
const Comp1 =() =>{
    return (
    <>
             <section id="plm">
            <div className="body2">
                <img src={xls} height="495" width="384"/>
             
            </div>    
                 <div className="body4">
                    <h3>Aboutt us</h3>
                <h1>We Are Travel<br/> Enthusiasts</h1>
                <p>We are passionate about exploring the world<br/>and helping others explore it too. our mission<br/>is provide the best travel experience<br/>at affordable prices.</p>
             
            
                    <p><img src={wri} height="20px" width="20px"/>Best tour package</p>
                    <p><img src={wri} height="20px" width="20px"/>Amazing travel guides</p>
                    <p><img src={wri} height="20px" width="20px"/>Customer satisfaction</p>
                    
                   
                </div>
        </section>
     </>
        )
} 
export default Comp1;