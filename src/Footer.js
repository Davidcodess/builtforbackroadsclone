import React from "react";
import './App.css'; 
import footerImg from "./images/footer.jpg";

class Footer extends React.Component {
    render() {
        return(
            <>
            <img className="footer-img" src={footerImg} />
            </>

        )
    }
}

export default Footer;