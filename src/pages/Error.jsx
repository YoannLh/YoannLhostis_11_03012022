import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../style/error.css'

class Error extends Component {
    
    render() {
        return (
            <div className="wrapperError">
                <p className="numberError">404</p>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retournez à la page d'accueil</Link>
            </div>
        )
    }
}

export default Error