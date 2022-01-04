import React, { Component } from "react";
import House from '../components/House'
import data from '../data/data.json'
import '../style/home.css'

class Home extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="wrapperHome">
                {data.map(house => {
                    return <House key={house.id} value={house.id} value2={house.title}/>
                })}
            </div>
        )
    }
}

export default Home