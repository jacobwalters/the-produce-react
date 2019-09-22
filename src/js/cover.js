import React from "react"
import produceData from '../produce.json'

export default class Cover extends React.Component {

    render() {
        return (
            <div className="cover">
                {produceData.cover &&<CoverImage image={produceData.cover} />}
            </div>
        )
    }

}

class CoverImage extends React.Component {

    render() {
        // Probably a better way to include the image, but this works and is easy to understand
        const image = require(`../images/${this.props.image}`)

        return (
            <div className='cover__image' style ={ { backgroundImage: "url("+image+")" } }></div>
        )
    }

}