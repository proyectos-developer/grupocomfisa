import React from 'react'

import TituloPaginaTablet from './tituloprincipaltablet.jsx'
import ProductosTablet from './productostablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'

import { useSelector } from 'react-redux'

export default function BusquedaProductosTablet({proporcional}) {

  const productos_data = useSelector(({productos_data}) => productos_data)

  return (
    <div style={{width: '100%'}}>
      <TituloPaginaTablet proporcional={proporcional}/>
      <ProductosTablet proporcional={proporcional}/>
      <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                    marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
      <FooterPrincipalTablet proporcional={proporcional}/>
      <FooterTablet proporcional={proporcional}/>
        <ModalCargando loading={productos_data.loading}/>
    </div>
  )
}