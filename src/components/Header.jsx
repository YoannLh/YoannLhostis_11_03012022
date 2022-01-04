import React, { Component } from "react";
import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom";
import '../style/header.css'

class Header extends Component {
    
    render() {
        return (
            <div className="wrapperHeader">
                <img src={logo} alt="logo_kasa"></img>
                <nav className="nav">
                    <ul className="ul">
                        <Link to='/'>Accueil</Link>
                        <Link to='/about'>À propos</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
