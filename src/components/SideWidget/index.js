import React, { useState } from 'react';
import './style.css';
import { FiChevronLeft as Icon} from 'react-icons/fi'

const SideWidget = (props) => {
    
    const [open, setOpen] = useState(false)

    return(
        <div id="SideWidget" open={open} style={{transform: open === false ? 'translateX(0)' : 'translateX(-100%)'}}>
            <Icon id="SideWidget-Toogle" open={open} onClick={() => { setOpen(!open); console.log(open )}}
            style={{transform: open === false ? 'rotate(0)' : 'rotate(180deg)'}}/>    
            
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