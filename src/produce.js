import React, { Component } from 'react'
import produceData from './produce.json'
import Header from "./js/header"
import Tabs from "./js/tabs"
import Intro from "./js/intro"
import Cover from "./js/cover"
import Mailchimp from "./js/mailchimp"

class App extends Component {

    render() {
        return (
            <div>
                {/* The fixed image at the top of the site */}
                <Cover />
                {/* The header image and titles, has child Components */}
                {produceData.name &&<Header />}
                {/* The intro panel with nutritional information */}
                <Intro />
                {/* The tab'd content Component with child content Component */}
                {produceData.tabs && <Tabs tabsData={produceData.tabs} />}
                {/* Package to handle newsletter subscription */}
                <Mailchimp name={produceData.name} />
            </div>
        )
    }

}

export default App
