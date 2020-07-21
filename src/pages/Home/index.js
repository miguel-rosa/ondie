import React, { useState, useEffect } from 'react';

/*import { FiMapPin } from 'react-icons/fi'*/
import api from '../../services/api'

import MapBox from '../../components/MapBox';
import SideWidget from '../../components/SideWidget'

const Home = () => {

    const [initialPosition, setInitialPosition] = useState([-46.786289,-23.516606]);
    const [companies, setCompanies] = useState([]);
        
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {        
            setInitialPosition([position.coords.longitude, position.coords.latitude])
            console.log(initialPosition)
        });
    }, [initialPosition])

    useEffect( () => {
        api.get('/').then( response => {
            setCompanies(response.data)
            console.log(response.data)
        })
    }, [])

    return(
        <div>
            <SideWidget points={companies} />
            <MapBox points={companies} position={initialPosition} />
       </div> 
    );
}

export default Home;