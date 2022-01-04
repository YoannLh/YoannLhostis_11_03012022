import React, { Component } from "react";
import '../style/collapse.css'

class Collapse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            text: props.text,
            open: false
        }
    }
    handleClick(e) {
        if(!this.state.open) {
            this.setState({open: true})
            document.getElementById("textCollapse").style.display = "block"
        } else {
           this.setState({open: false}) 
           document.getElementById("textCollapse").style.display = "none"
        }
    }
    render() {
        return (
            <div className="wrapperCollapse">
                <div className="headerCollapse">
                    <p>{this.state.title}</p>
                    <div onClick={(e) => this.handleClick(e)}>fleche</div>
                </div>
                <p id="textCollapse">{this.state.text}</p>
            </div>
        )
    }
}

export default Collapse
