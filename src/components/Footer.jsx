import React, { Component } from "react";
import '../style/footer.css'
import logo from '../assets/images/logo_white.svg'

class Footer extends Component {
    
    render() {
        return (
            <div className="wrapperFooter">
                <img className="logoWhite" src={logo} alt="logo_kasa"></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        )
    }
}

export default Footer
