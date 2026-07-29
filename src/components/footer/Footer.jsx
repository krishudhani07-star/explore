
 import React from 'react'
 import '../footer/footer.css'
 import fac from "../../assets/f.png";
 import tele from "../../assets/t.png"
 import insta from "../../assets/i.png"
 import yuo from "../../assets/y.png"

const Footer =() =>{
    return (
<>
 <footer>
    <div className="footer-container">

        <div className="footer-box">
            <h2><span>Explore</span></h2>
            
            <p>Explore the world with us and create unforgettable memories.</p>

            <div className="social-icons">
                <img className="D1" src={fac}/>
                <img className="D2" src={tele}/>
                <img className="D3" src={insta}/>
                <img className="D4" src={yuo}/>
            </div>
        </div>

        <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div className="footer-box">
            <h3>Our Services</h3>
            <ul>
                <li>Flight Booking</li>
                <li>Hotel Booking</li>
                <li>Transport Guide</li>
                <li>Travel Guide</li>
            </ul>
        </div>

        <div className="footer-box">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates and offers.</p>

            <form>
                <input className="E1" type="email" placeholder="Your Email"/>
                <button className="E2"  type="submit">Subscribe</button>
            </form>
        </div>

    </div>

    <div className="footer-bottom"><hr/>
        © 2024 Explore. All Rights Reserved.
    </div>
</footer>
</>
       )
}
export default Footer;