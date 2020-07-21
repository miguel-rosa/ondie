import React, { useState, useEffect } from 'react';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';

import api from '../../services/api'

const Home = () => {

    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoibWlndWVsLXJvc2EiLCJhIjoiY2tianVva2tyMHN6MTJ1bXl3cjlibWFycCJ9.ui5W3hZKyJy5AkJq7qZ5hQ'
    });

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
            <Map
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/streets-v9"
                center={initialPosition}
                zoom={[14]}
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Layer type="circle" id="marker" paint={{
                    'circle-color': "#ff5200",
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff',
                    'circle-stroke-opacity': 1}}
                >
                    {
                        companies.map( map => (
                            <Feature coordinates={[map.acf.longitude, map.acf.latitude]} />
                        ))
                    }
                </Layer>
            </Map>          
       </div> 
    );
}

export default Home;