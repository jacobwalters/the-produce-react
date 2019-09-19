import React, { Component } from 'react'
import produceData from './produce.json'

class Header extends Component {
    render() {
        return (
            <header className="">
                <h1 className="">The {this.props.title}</h1>
            </header>
        )
    }
}

class Tabs extends Component {
    render() {
        return (
            produceData.tabs.map((tab, key) => <span key={tab.id}>{tab.text}</span>)
        )
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <Header
                    title={produceData.name}
                />
                <Tabs />
            </div>
        )
    }

}

export default App