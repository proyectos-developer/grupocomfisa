import React from 'react'
import GoogleMapReact from 'google-map-react';

import icono_ubicacion from '../../assets/iconos/icono_mapa_ubicacion.png'

export default function MapaUbicacionCell({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={icono_ubicacion} style={{width: 34 / proporcional, height: 48 / proporcional}}/>;
 
    const defaultProps = {
      center: {
        lat: -12.2314589,
        lng: -76.8923536
      },
      zoom: 14
    };

    return (
        <div style={{width: 499 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: 459 / proporcional, height: 300 / proporcional, marginTop: 60 / proporcional, marginBottom: 20 / proporcional }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={-12.2314589}
                    lng={-76.8923536}
                    text="Fábrica"
                />
                </GoogleMapReact>
            </div>
        </div>
    )
}
