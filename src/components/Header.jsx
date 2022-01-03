import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    
    render() {
        return (
            <div>
                <img src="" alt=""></img>
                <nav>
                    <ul>
                        <Link to='/'>Accueil</Link>
                        <Link to='/about'>À propos</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
