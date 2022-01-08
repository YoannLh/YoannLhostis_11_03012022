import React, { Component } from "react";
import Houses from '../components/Houses'
import data from '../data/data.json'
import '../style/home.css'

class Home extends Component {
    componentDidMount() {
        console.log("DATA : ", data);
    }
    render() {
        return (
            <div className="wrapperHome">
                <div className="imgHome"></div>
                <div className="wrapperHouses">
                {data.map(house => {
                    return <Houses key={house.id} id={house.id} title={house.title} background={house.pictures[0]} />
                })}
                </div>
            </div>
        )
    }
}

export default Home