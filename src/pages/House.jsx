import React, { Component } from "react";
import data from '../data/data.json'
import Carroussel from '../components/Carroussel'
import Collapse from '../components/Collapse'
import '../style/house_page.css'

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
            tags: []
        }
    }
    componentDidMount() {
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
                    tags: [...house.tags]
                })
            }
        }
	}
    renderStars() {
        const allStars = [];
        for(let i = 1; i <= 5; i++) {
            allStars.push(<i key={i} className="fas fa-star" style={{}}></i>);
        }
        for(let i = 0; i < Number(this.state.rating); i++) {
            allStars[i].props.style.color = "#FF6060";
        }
        return <div>{allStars}</div>
    }
    render() {
        return (
            <div className="wrapperHousePage">
                <Carroussel pictures={this.state.pictures} />
                <div className="wrapperTitle">
                    <div>
                        <h1 className="titleHouse">{this.state.title}</h1>
                        <p className="location">{this.state.location}</p>
                        <div className="tags">
                            {this.state.tags.map(tag =>
                                <p key={tag} className="tag">{tag}</p>
                            )}
                        </div>  
                    </div>
                    <div className="wrapperAllInfosHost">
                        <div className="wrapperHost">
                            <p className="hostName">{this.state.host.name}</p>
                            <div className="pictureHost" style={{background: `url(${this.state.host.picture})`}}></div>
                        </div>
                        <div className="allStars">{this.renderStars()}</div>
                    </div>
                </div>
                <div className="wrapperCollapses">
                    <Collapse title={"Description"} text={this.state.description} />
                    <Collapse title={"Equipements"} text={this.state.equipments} />
                </div>
            </div>
        )
    }
}

export default House