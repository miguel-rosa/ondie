import React, { useState, useEffect } from 'react';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';

const Home = () => {


    const objectMaps = [
        {
            "longitude":-46.777949,
            "latitude":-23.509990,
            "id":1
        },
        {
            "longitude":-46.786289,
            "latitude":-23.516606, 
            "id":2
        },
        {
            "longitude":-46.7768143,
            "latitude":-23.5496397,
            "id":3
        },
        {
            "longitude":-46.7768749,
            "latitude":-23.5496396,
            "id":4
        }
    ]

    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoibWlndWVsLXJvc2EiLCJhIjoiY2tianVva2tyMHN6MTJ1bXl3cjlibWFycCJ9.ui5W3hZKyJy5AkJq7qZ5hQ'
      });

      const [initialPosition, setInitialPosition] = useState([-46.786289,-23.516606]);
      
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
                        objectMaps.map( map => (
                            <Feature coordinates={[map.longitude, map.latitude]} />
                        ))
                    }
                </Layer>
            </Map>          
       </div> 
    );
}

export default Home;