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
                <h4>Nutritional value per 100 g (3.5 oz)
                    <span>i</span>
                    <div>Percentages are relative to US recommendations for adults. Source: USDA Nutrient Database</div>
                </h4>
            </div>
        )
    }

}
