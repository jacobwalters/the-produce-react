import React from "react"

export default class TabsContent extends React.Component {
    render() {
        return (
            <div className="tabs__tab">
                {this.props.content}
            </div>
        )
    }
}
