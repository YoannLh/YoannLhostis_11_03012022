import React, { Component } from "react";
import '../style/carroussel.css'

class Carroussel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actualPicture: 1,
            pictures: []
        }
    }
    componentDidMount() {
        this.setState((state, props) => ({ pictures: props.pictures }))   
    }
    displayOrNotArrows() {
        if(this.state.pictures.length === 1) {

        }
    }
    handleClickLeft() {
        if(this.state.actualPicture === 1) {
            this.setState({
                actualPicture: this.state.pictures.length
            })
        } else {
            this.setState({
                actualPicture: this.state.actualPicture - 1
            })
        }
    }
    handleClickRight() {
        if(this.state.actualPicture === this.state.pictures.length) {
            this.setState({
                actualPicture: 1
            })
        } else {
            this.setState({
                actualPicture: this.state.actualPicture + 1
            })
        }
    }
    componentDidUpdate() {
        document.getElementById("wrapperCarroussel").style.backgroundImage = `url(${this.state.pictures[this.state.actualPicture - 1]})`

    }
    render() {
        return (
            <div id="wrapperCarroussel">
                {this.state.pictures.length === 1
                ? null
                : <div className="left" onClick={() => this.handleClickLeft()}><i className="fas fa-chevron-left"></i></div>}
                <div className="countCarroussel">{this.state.actualPicture} / {this.state.pictures.length}</div>
                {this.state.pictures.length === 1
                ? null
                : <div className="right" onClick={() => this.handleClickRight()}><i className="fas fa-chevron-right"></i></div>}
            </div>
        )
    }
}

export default Carroussel
