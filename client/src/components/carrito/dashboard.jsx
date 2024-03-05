import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import ListaCotizar from './listacotizar.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'

export default function CarritoCotizar({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPagina proporcional={proporcional}/>
        <ListaCotizar proporcional={proporcional}/>
        <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}
