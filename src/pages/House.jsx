import React, { Component } from "react";
import data from '../data/data.json'
import Carroussel from '../components/Carroussel'
import Collapse from '../components/Collapse'

class House extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            title: "",
            cover: "",
            pictures: [],
            description: "",
            host: {},
            rating: "",
            location: "",
            equipments: "",
            tags: ""
        }
    }
    componentDidMount() {
        console.log("House did mount")
		let params = new URLSearchParams(document.location.search.substring(1));
		let id = params.get("id");
        for(const house of data) {
            if(id === house.id) {
                this.setState({
                    id: house.id,
                    title: house.title,
                    cover: house.cover,
                    pictures: [...house.pictures],
                    description: house.description,
                    host: house.host,
                    rating: house.rating,
                    location: house.location,
                    equipments: house.equipments,
                    tags: house.tags
                })
            }
        }
	}
    render() {
        console.log("House render")
        return (
            <div>
                <Carroussel pictures={this.state.pictures} />
                <h1>{this.state.title}</h1>
                <p>{this.state.location}</p>
                <p>{this.state.host.name}</p>
                <div>{this.state.host.picture}</div>
                <p>{this.state.tags}</p>
                <div>{this.state.rating}</div>
                <Collapse title={"description"} text={this.state.description} />
                <Collapse title={"equipments"} text={this.state.equipments} />
            </div>
        )
    }
}

export default House