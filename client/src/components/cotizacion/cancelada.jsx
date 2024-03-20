import React from 'react'

import TituloPrincipalCancelada from './tituloprincipalcancelada.jsx'
import InformacionCancelada from './informacioncancelada.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'
 
export default function RespuestaCotizacionCancelada({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPrincipalCancelada proporcional={proporcional}/>
        <InformacionCancelada proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}