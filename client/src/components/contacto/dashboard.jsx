import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import MapaUbicacion from './mapaubicacion.jsx'
import ContactoInfo from './informacion.jsx'
import FormularioContacto from './formulario.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function Contacto({proporcional}) {

  const correo_data = useSelector(({correo_data}) => correo_data)

  return (
    <div style={{width: '100%'}}>
        <TituloPagina proporcional={proporcional}/>
        <MapaUbicacion proporcional={proporcional}/>
        <div className='d-flex' style={{paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 34 / proporcional, paddingBottom: 55 / proporcional}}>
            <div style={{width: '33%'}}>
                <ContactoInfo proporcional={proporcional}/>
            </div>
            <div style={{width: '67%'}}>
                <FormularioContacto proporcional={proporcional}/>
            </div>
        </div>  
        <div style={{width: 1220 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, height: 2 / proporcional, 
                    background: 'rgb(230, 232, 232)', marginBottom: 35 / proporcional}}/>
        <ModalCargando loading={correo_data.loading}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>    
    </div>
  )
}
