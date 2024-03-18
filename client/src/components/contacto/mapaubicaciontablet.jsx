import React from 'react'
import GoogleMapReact from 'google-map-react';

import icono_ubicacion from '../../assets/iconos/icono_mapa_ubicacion.png'

export default function MapaUbicacionTablet({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={icono_ubicacion} style={{width: 34 / proporcional, height: 48 / proporcional}}/>;
 
    const defaultProps_1 = {
        center: {
          lat: -12.2547532,
          lng: -76.8877542
        },
        zoom: 14
      };
      
      const defaultProps_2 = {
        center: {
          lat: -12.2506607,
          lng: -76.8792303
        },
        zoom: 14
      };
      
      const defaultProps_3 = {
        center: {
          lat: -12.2308559,
          lng: -76.9458359  
        },
        zoom: 14
      };
      
      const defaultProps_4 = {
        center: {
          lat: -12.4650681,
          lng: -76.7581688
        },
        zoom: 14
      };


    return (
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 120 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 300 / proporcional, marginBottom: 20 / proporcional }}>
                <div style={{width: '100%', height: 300 / proporcional}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                        defaultCenter={defaultProps_1.center}
                        defaultZoom={defaultProps_1.zoom}
                    >
                        <AnyReactComponent
                            lat={-12.2547532}
                            lng={-76.8877542}
                            text="Almacen Paul Poblet"
                        />
                    </GoogleMapReact>
                </div>
                <div style={{width: '100%', height: 300 / proporcional}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                        defaultCenter={defaultProps_2.center}
                        defaultZoom={defaultProps_2.zoom}
                    >
                        <AnyReactComponent
                            lat={-12.2506607}
                            lng={-76.8792303}
                            text="Proyectos e Inversiones Flavi S.A.C"
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 300 / proporcional, marginBottom: 20 / proporcional }}>
                <div style={{width: '100%', height: 300 / proporcional }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                        defaultCenter={defaultProps_3.center}
                        defaultZoom={defaultProps_3.zoom}
                    >
                        <AnyReactComponent
                            lat={-12.2308559}
                            lng={-76.9458359}
                            text="Comercializadora Hanna S.A.C"
                        />
                    </GoogleMapReact>
                </div>
                <div style={{width: '100%', height: 300 / proporcional }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                        defaultCenter={defaultProps_4.center}
                        defaultZoom={defaultProps_4.zoom}
                    >
                        <AnyReactComponent
                            lat={-12.4650681}
                            lng={-76.7581688}
                            text="Steel HouseValery S.A.C"
                        />
                        </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}
