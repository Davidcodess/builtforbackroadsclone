import React from "react";
import './App.css';
import Nissan from "./images/350z.jpg";
import BMW1351 from "./images/BMW1351.jpg";


class Home extends React.Component {
    render() {
        return (
            <>
                <h1> FOR THE DRIVER IN US</h1>
                <p className="HomeComponentText">
                We feature the best driver-focused cars currently for sale,
                almost exclusively with manual transmissions. Updated daily.
                </p>
            <br/>
                <div className="car-link-container">
                    <a className="car-filter-link" href="gotosomewhere"> BMW</a>
                    <a className="car-filter-link" href="gotosomewhere"> Chevorlet</a>
                    <a className="car-filter-link" href="gotosomewhere"> Ford</a>
                    <a className="car-filter-link" href="gotosomewhere"> Honda</a>
                    <a className="car-filter-link" href="gotosomewhere"> Mazda</a>
                    <a className="car-filter-link" href="gotosomewhere"> Toyota</a>
                    <a className="car-filter-link" href="gotosomewhere"> Nissan</a>
                    <a className="car-filter-link" href="gotosomewhere"> Subaru</a>
                </div>

                <div className="underline"></div>
                
                <>
                <div className="homepage-cars-section">
                    <div className="main-car-container">
                        <img  className="BmwHomeImg" src={BMW1351} alt="BMW 1351" />
                        <div className="BmwText"> 
                            <div>
                            <h2 className="bmwh2">2008 BMW 1351</h2> 
                            <p className="locationText"> EFLAND, NC - Asking $22,000</p>  
                            </div>

                            <h3 className="bmwh3"> A wolf in sheep's clothing, this E82 135i features a generous helping of worthy modificaitons to help bring it to the next level. </h3>
                        </div>
                    </div>
                    <div className="cars-container">
                        <img src={Nissan} />
                        <h2> Nissan 350z</h2>
                    </div>

                    <div className="cars-container">
                        <img src={Nissan} />
                        <h2> Nissan 350z</h2>
                    </div>

                    <div className="cars-container">
                        <img src={Nissan} />
                        <h2> Nissan 350z</h2>
                    </div>

                    <div className="cars-container">
                        <img src={Nissan} />
                        <h2> Nissan 350z</h2>
                    </div>
                </div>
                </>
            </>
        )
    }
}

export default Home;