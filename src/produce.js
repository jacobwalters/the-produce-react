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

class Nutritional extends Component {

    render() {
        if (produceData.nutrition) {
            return (
                produceData.nutrition.map(item => 
                    <li key={item.id}>
                        <span>{item.category}</span>{item.value}
                    </li>
                )
            )
        }

        return null
    }

}

class TabsTitle extends Component {
    constructor() {
        super()
        this.state = {
            activeTab: 1,
            tabContent: produceData.tabs[0].text
        }
    }

    changeActiveTab = (activeId, content) => {
        this.setState({ activeTab: activeId })
        this.setState({ tabContent: content })
    }

    render() {

        if (produceData.tabs) {
            return (
                <div>
                    {produceData.tabs.map(tab => 
                        <span
                            className={
                                this.state.activeTab === tab.id ? 'active' : ''
                            }
                            key={tab.id}
                        >
                            <button
                                type="button"
                                onClick={() => 
                                    this.changeActiveTab(tab.id, tab.text)}
                            >
                                {tab.title}
                            </button>
                        </span>
                    )}

                    <TabsContent content={this.state.tabContent} />
                </div>
            )
        }

    }

}

class TabsContent extends Component {

    render() {
        return (
            <div>
                {this.props.content}
            </div>
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
                <ul><Nutritional /></ul>
                <TabsTitle />
            </div>
        )
    }

}

export default App