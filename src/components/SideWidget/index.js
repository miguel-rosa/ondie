import React from 'react';
import './style.css'

const SideWidget = (props) => {
    return(
        <div id="SideWidget">
            <div className="SideWidget-Header">
            <h1>ondié</h1>
            <p> Encontre negócios próximos e<br/>incentive o comércio local</p>
            </div>
            <div id="SideWidget-Wrapper">
                {
                    props.points.map( point => (
                        <div className="SideWidget-Point" key={point.id}>
                            <h2>{point.title.rendered}</h2>
                            <p>{point.acf.description}</p>
                            <div>
                                <a 
                                   className="SideWidget-WhatsApp" 
                                   target="_blank"  
                                   rel="noopener noreferrer" 
                                   href={`https://wa.me/${point.acf.whatsapp}`}
                                >
                                    Whatsapp</a>
                                <a 
                                    className="SideWidget-Email" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href={`mailto:${point.acf.email}`}
                                >
                                    Email
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SideWidget