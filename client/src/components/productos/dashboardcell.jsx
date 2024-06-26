import React, { useEffect } from 'react'

import TituloPaginaCell from './tituloprincipalcell.jsx'
import ProductosCell from './productoscell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'
import ModalCargando from '../modal/cargando.jsx'

import { useSelector } from 'react-redux'

export default function BusquedaProductosCell({proporcional}) {

  const productos_data = useSelector(({productos_data}) => productos_data)

  return (
    <div style={{width: '100%'}}>
      <TituloPaginaCell proporcional={proporcional}/>
      <ProductosCell proporcional={proporcional}/>
      <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                    marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
      <FooterPrincipalCell proporcional={proporcional}/>
      <FooterCell proporcional={proporcional}/>
      <ModalCargando loading={productos_data.loading}/>
    </div>
  )
}