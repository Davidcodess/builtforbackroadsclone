import React from 'react';
import logo from './images/logo.jpg';
import './App.css';

class NavBar extends React.Component {
    render () {
        return (
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="gotonowhere">
                        <img src= {logo} alt="Logo" width="200" height="200" class="d-inline-block align-text-top"/>
                        </a>
                        <div className='nav-link-container'>
                        <a className='nav-link' href="gotosomewhere"> NEWSLETTER </a>

                        <a className='nav-link' href="gotosomewhere"> OUR STORY </a>

                        <a className='nav-link' href="gotosomewhere"> CONTACT US</a>
                        </div>
                        


                    </div>
                </nav>
         
        )
    }
}

export default NavBar;