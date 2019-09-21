import React from "react"
import TabsContent from "./tabsContent"

export default class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 1,
            tabContent: this.props.tabsData[0].text
        }
    }

    changeActiveTab = (activeId, content) => {
        this.setState({ activeTab: activeId })
        this.setState({ tabContent: content })
    }

    render() {

        if (this.props.tabsData) {
            return (
                <div>
                    {this.props.tabsData.map(tab => 
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
