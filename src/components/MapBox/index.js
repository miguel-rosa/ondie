import React from 'react';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';

import  ImageMarker  from '../../assets/map-pin-bigger.png'


const MapBox = (props) => {
    
    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoibWlndWVsLXJvc2EiLCJhIjoiY2tianVva2tyMHN6MTJ1bXl3cjlibWFycCJ9.ui5W3hZKyJy5AkJq7qZ5hQ'
    });
    
    const image = new Image();
    image.src = ImageMarker;
    const images = ['image-icon', image]

    return (
        <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        center={props.position}
        zoom={[14.5]}
        containerStyle={{
            height: '100vh',
            width: '100vw'
        }}
    >
        <Layer 
            id="marker"  
            type="symbol"
            images={images}
            layout={{ "icon-image": "image-icon" }}
        >
            {
                props.points.map( map => (
                    <Feature key={map.id} coordinates={[map.acf.longitude, map.acf.latitude]} />
                ))
            }
        </Layer>
    </Map>
    )
}

export default MapBox