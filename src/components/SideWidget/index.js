import React from 'react';
import './style.css'

const SideWidget = (props) => {
    return(
        <div id="SideWidget">
            <div id="SideWidget-Wrapper">
                {
                    props.points.map( point => (
                        <div className="SideWidget-Point" key={point.id}>
                            {point.title.rendered}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SideWidget