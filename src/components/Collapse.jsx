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
            document.getElementById(`textCollapse${this.props.title}`).style.background = "#F6F6F6"
            document.getElementById(`textCollapse${this.props.title}`).style.color = "#FF6060"
            document.getElementById(`textCollapse${this.props.title}`).style.padding = "50px 10px"
            document.getElementById(`textCollapse${this.props.title}`).style.position = "relative"
            document.getElementById(`textCollapse${this.props.title}`).style.top = "-25px"
            document.getElementById(`textCollapse${this.props.title}`).style.zIndex = "-1"
            document.getElementById(`textCollapse${this.props.title}`).style.borderRadius = "10px"
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
                    <div className="wrapperChevronDown" id={`chevronCollapse${this.props.title}`} onClick={(e) => this.handleClick(e)}>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div id={`textCollapse${this.props.title}`}>
                    {Array.isArray(this.state.text) ?
                    this.state.text.map((el) => (
                        <p key={el}>{el}</p>
                    ))
                : <p>{this.state.text}</p>}
                </div>
            </div>
        )
    }
}

export default Collapse
