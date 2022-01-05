import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/house.css'

class Houses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: props.id,
            title: props.title,
            background: ""
        }
    }
    componentDidMount() {
        this.setState((state, props) => ({
            background: this.props.background
        }))
    }
    render() {
        return (
            <Link to={`/house/?id=${this.state.key}`} className="wrapperHouse" style={{background: `url(${this.state.background}`}}>
                <p>{this.state.title}</p>
            </Link>
        )
    }
}

export default Houses
