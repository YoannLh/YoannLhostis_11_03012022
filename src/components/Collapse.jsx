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
        } else {
           this.setState({open: false}) 
           document.getElementById(`textCollapse${this.props.title}`).style.display = "none"
        }
    }
    render() {
        return (
            <div className="wrapperCollapse">
                <div className="headerCollapse">
                    <p>{this.state.title}</p>
                    <div onClick={(e) => this.handleClick(e)}>fleche</div>
                </div>
                <p id={`textCollapse${this.props.title}`}>{this.state.text}</p>
            </div>
        )
    }
}

export default Collapse
