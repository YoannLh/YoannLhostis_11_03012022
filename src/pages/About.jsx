import React, { Component } from "react";
import '../style/about.css'
import Collapse from '../components/Collapse'

class About extends Component {
    constructor() {
        super()
        this.state = {
            textFiability : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
            textRespect : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
            textService : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
            textResponsability: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    }
    render() {
        return (
            <div className="wrapperAbout">
                <div className="imgBandeauAbout"></div>
                <Collapse title="Fiabilité" text={this.state.textFiability} />
                <Collapse title="Respect" text={this.state.textRespect} />
                <Collapse title="Service" text={this.state.textService} />
                <Collapse title="Responsabilité" text={this.state.textResponsability} />
            </div>
        )
    }
}

export default About