import React, { Component } from 'react'
import produceData from './produce.json'
import Tabs from "./tabs"
import Mailchimp from "./mailchimp"

class Header extends Component {

    render() {
        return (
            <div>
                {produceData.name &&
                    <header className="">
                        <h1 className="">The {produceData.name}</h1>
                        <h2 className="">{produceData.latinName}</h2>
                    </header>
                }
            </div>
        )
    }

}

class Image extends Component {

    render() {
        const image = require(`./images/${this.props.image}`)

        return (
            <img src={image} alt={produceData.imageAlt} />
        )
    }

}

class Intro extends Component {

    render() {
        return (
            <div>
                {produceData.intro &&
                    <p className="">{produceData.intro}</p>
                }

                {produceData.introList &&
                    <ul>
                        {produceData.introList.map(item => 
                            <li key={item.id}>
                                {item.text}
                            </li>
                        )}
                    </ul>
                }
            </div>
        )
    }

}

class Nutritional extends Component {

    render() {
        if (produceData.nutrition) {
            return (
                <ul>
                    {produceData.nutrition.map(item => 
                        <li key={item.id}>
                            <span>{item.category}</span>{item.value}
                        </li>
                    )}
                </ul>
            )
        }

        return null
    }

}

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                {produceData.image &&<Image image={produceData.image} />}
                <Intro />
                <Nutritional />
                {produceData.tabs && <Tabs tabsData={produceData.tabs} />}
                <Mailchimp />
            </div>
        )
    }

}

export default App
