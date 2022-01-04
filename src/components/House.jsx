import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/house.css'

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: props.value,
            title: props.value2
        }
    }
    render() {
        return (
            <Link to={`/house/?id=${this.state.key}`} className="wrapperHouse">
                <p>{this.state.title}</p>
            </Link>
        )
    }
}

export default House
