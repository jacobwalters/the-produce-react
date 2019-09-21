import React, { Component } from 'react'
import produceData from './produce.json'
import Tabs from "./tabs"

class Header extends Component {

    render() {
            return (
                <div>
                    {produceData.name &&
                        <header className="">
                            <h1 className="">The {produceData.name}</h1>
                        </header>
                    }
                </div>
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

                {produceData.introList.length &&
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
                <Intro />
                <Nutritional />
                {produceData.tabs && <Tabs tabsData={produceData.tabs} />}
            </div>
        )
    }

}

export default App