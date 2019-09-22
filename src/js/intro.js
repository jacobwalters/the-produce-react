import React from "react"
import produceData from '../produce.json'
import Nutritional from "./nutritional"

export default class Intro extends React.Component {

    render() {
        return (
            <div className="intro">
                <div className="intro__information">
                    {produceData.intro &&
                        <p>{produceData.intro}</p>
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
