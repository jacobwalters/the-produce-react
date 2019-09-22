import React, { Component } from 'react'
import produceData from './produce.json'
import Tabs from "./tabs"
import Mailchimp from "./mailchimp"

class Header extends Component {

    render() {
        return (
            <header className="header">
                {produceData.image &&<Image image={produceData.image} />}
                <h1 className="">The {produceData.name}</h1>
                <h2 className="">({produceData.latinName})</h2>
            </header>
        )
    }

}

class Cover extends Component {

    render() {
        return (
            <div className="cover">
                {produceData.cover &&<CoverImage image={produceData.cover} />}
            </div>
        )
    }

}

class CoverImage extends Component {

    render() {
        const image = require(`./images/${this.props.image}`)

        return (
            <div className='cover__image' style ={ { backgroundImage: "url("+image+")" } }></div>
        )
    }

}

class Image extends Component {

    render() {
        const image = require(`./images/${this.props.image}`)

        return (
            <div className="header__image">
                <img src={image} alt={produceData.imageAlt} />
            </div>
        )
    }

}

class Intro extends Component {

    render() {
        return (
            <div className="intro">
                <div className="intro__information">
                    {produceData.intro &&
                        <p className="">{produceData.intro}</p>
                    }

                    {produceData.nutrition &&<Nutritional />}
                </div>
                {produceData.varieties &&
                    <div className="intro__varieties">
                        <ul>
                            <li>Varieties</li>
                            {produceData.varieties.map(item => 
                                <li key={item.id}>
                                    {item.text}
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        )
    }

}

class Nutritional extends Component {

    render() {
        return (
            <ul className="intro__nutrition">
                {produceData.nutrition.map(item => 
                    <li key={item.id}>
                        {item.category}<span>{item.value}</span>
                    </li>
                )}
            </ul>
        )
    }

}

class App extends Component {

    render() {
        return (
            <div className=""> 
                <Cover />
                {produceData.name &&<Header />}
                <Intro />
                {produceData.tabs && <Tabs tabsData={produceData.tabs} />}
                <Mailchimp name={produceData.name} />
            </div>
        )
    }

}

export default App
