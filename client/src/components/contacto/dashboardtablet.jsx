import React from 'react'

import TituloPaginaTablet from './tituloprincipaltablet.jsx'
import MapaUbicacionTablet from './mapaubicaciontablet.jsx'
import ContactoInfoTablet from './informaciontablet.jsx'
import FormularioContactoTablet from './formulariotablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function ContactoTablet({proporcional}) {

  const correo_data = useSelector(({correo_data}) => correo_data)

  return (
    <div style={{width: '100%'}}>
        <TituloPaginaTablet proporcional={proporcional}/>
        <MapaUbicacionTablet proporcional={proporcional}/>
        <ContactoInfoTablet proporcional={proporcional}/>
        <FormularioContactoTablet proporcional={proporcional}/>
        <div style={{width: 871 / proporcional, marginLeft: 60 / proporcional, marginRight: 60 / proporcional, height: 2 / proporcional, 
                    background: 'rgb(230, 232, 232)', marginBottom: 35 / proporcional}}/>
        <ModalCargando loading={correo_data.loading}/>
        <FooterPrincipalTablet proporcional={proporcional}/>
        <FooterTablet proporcional={proporcional}/>    
    </div>
  )
}
