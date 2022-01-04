import React, { Component } from "react";
import '../style/carroussel.css'

class Carroussel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1,
            total: props.total
        }
    }
    handleClickLeft() {
        this.setState({
            num: this.state.num - 1
        })
    }
    handleClickRight() {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div className="wrapperCarroussel">
                <div onClick={() => this.handleClickLeft()}>gauche</div>
                <div>{this.state.num} / {this.state.total}</div>
                <div onClick={() => this.handleClickRight()}>droite</div>
            </div>
        )
    }
}

export default Carroussel
