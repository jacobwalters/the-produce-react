import React from "react"
import produceData from '../produce.json'

export default class Nutritional extends React.Component {

    render() {
        return (
            <div className="intro__nutrition">
                <h3>Nutrition</h3>
                <ul>
                    {/* Pretty happy with how this works */}
                    {produceData.nutrition.map(item => 
                        <li
                            className={item.as ? 'child' : ''}
                            key={item.id}
                        >
                            {item.category}<span>{item.value}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

}
