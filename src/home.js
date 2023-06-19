import React from "react";
import './App.css';
import Nissan from "./images/350z.jpg";
import BMW1351 from "./images/BMW1351.jpg";
import Mustang from "./images/Ford/turbomustang.jpg";
import Camaro from "./images/Chevy/ZL1Camaro.jpg";
import Supra from "./images/Toyota/Supra.jpg";




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
                </div>

                <div className="homepage-cars-for-sale-container">

                    <div className="cars-container">
                        <img className="homepage-car-img" src={Nissan} />
                        <h2 className="homepageH2"> 2010 Nissan 3570z</h2>
                        <p className="homepage-car-text">This Z34 370Z sports a performance exhaust to unlock a bit more horsepower and offer more music out the back. </p>
                    </div>

                    <div className="cars-container">
                        <img className="homepage-car-img" src={Mustang} />
                        <h2 className="homepageH2"> 2011 GT Mustang 'Turbo'</h2>
                        <p className="homepage-car-text"> Sporting a high performance Aluminator long block aided by a turbocharger, this Mustang GT is ready for the drag strip.</p>
                    </div>

                    <div className="cars-container">
                        <img className="homepage-car-img" src={Camaro} />
                        <h2 className="homepageH2"> 2018 Chevorlet Camaro ZL1</h2>
                        <p className="homepage-car-text"> Offering a staggering 720hp at the rear wheels and even more torque, this Camaro ZL1 features upgraded heads and meth injection.</p>
                    </div>

                    <div className="cars-container">
                        <img className="homepage-car-img" src={Supra} />
                        <h2 className="homepageH2"> 2023 Toyota GR Supra 'A91-MT'</h2>
                        <p className="homepage-car-text"> Finished in CU Later Gray, this Supra is a A91-MT edition which includes a proper three-pedal manual and some bespoke cosmetic bits.</p>
                    </div>

                  
                </div>

                <button className="loadBtn">
                    Load More Cars
                </button>
                </>

            </>
        )
    }
}

export default Home;