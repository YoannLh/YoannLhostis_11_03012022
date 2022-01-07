import React, { Component } from "react";
import '../style/collapse.css'

class Collapse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            text: "",
            open: false
        }
    }
    componentDidMount() {
        this.setState((state, props) => ({
            title: props.title,
            text: props.text
        }))
        document.getElementById(`textCollapse${this.props.title}`).style.display = "none" 
    }
    handleClick(e) {
        if(!this.state.open) {
            this.setState({open: true})
            document.getElementById(`textCollapse${this.props.title}`).style.display = "block"
            document.getElementById(`chevronCollapse${this.props.title}`).style.transform = "rotate(180deg)"
        } else {
           this.setState({open: false}) 
           document.getElementById(`textCollapse${this.props.title}`).style.display = "none"
           document.getElementById(`chevronCollapse${this.props.title}`).style.transform = "rotate(0deg)"
        }
    }
    render() {
        return (
            <div className="wrapperCollapse">
                <div className="headerCollapse">
                    <p>{this.state.title}</p>
                    <div id={`chevronCollapse${this.props.title}`} onClick={(e) => this.handleClick(e)}><i class="fas fa-chevron-down"></i></div>
                </div>
                <p id={`textCollapse${this.props.title}`}>{this.state.text}</p>
            </div>
        )
    }
}

export default Collapse
