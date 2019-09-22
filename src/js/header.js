import React from "react"
import produceData from '../produce.json'

export default class Header extends React.Component {

    render() {
        return (
            <header className="header">
                {produceData.image &&<Image image={produceData.image} />}
                <h1>The {produceData.name}</h1>
                <h2>({produceData.latinName})</h2>
            </header>
        )
    }

}

class Image extends React.Component {

    render() {
        // Probably a better way to include the image, but this works and is easy to understand
        const image = require(`../images/${this.props.image}`)

        return (
            <div className="header__image">
                <img src={image} alt={produceData.imageAlt} />
            </div>
        )
    }

}
