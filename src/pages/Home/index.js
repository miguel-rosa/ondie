import React, { useState, useEffect } from 'react';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';

const Home = () => {
    
    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoibWlndWVsLXJvc2EiLCJhIjoiY2tianVva2tyMHN6MTJ1bXl3cjlibWFycCJ9.ui5W3hZKyJy5AkJq7qZ5hQ'
      });

      const [initialPosition, setInitialPosition] = useState([0,0]);
      
      useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            
            setInitialPosition([position.coords.longitude, position.coords.latitude])
            console.log(initialPosition)
        });
      }, [initialPosition])

    return(
        <div>
            <Map
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/streets-v9"
                center={initialPosition}
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={initialPosition} />
                </Layer>
            </Map>          
       </div> 
    );
}

export default Home;