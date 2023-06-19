import React from "react";
import './App.css'; 
import footerImg from "./images/footer.jpg";

class Footer extends React.Component {
    render() {
        return(
            <>
            <img className="footer-img" src={footerImg} />

                <div className="footer-section">
                    <div className="footer-link-section">

                        <div className="footer-link-container">
                            <h4> SUPPORT</h4>
                            <ul>
                                <li>Submit a car</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>Stickers</li>
                            </ul>
                        </div>
                        <div className="footer-link-container">
                            <h4> ABOUT</h4>
                            <ul>
                                <li>Our Story</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                            </ul>
                        </div>

                    </div>
                    <div className="subscription-container">
                        <h6> Subscribe</h6>
                        <p className="subscribe-p"> Be the first to know of the latest driver-focused cars for sale.</p>
                            <form>
                            <input type="email" placeholder="Enter email" name="email"></input>
                            <button className="subscribeBtn"> SIGN UP</button>
                            </form>
                    </div>
                </div>
            </>



        )
    }
}

export default Footer;