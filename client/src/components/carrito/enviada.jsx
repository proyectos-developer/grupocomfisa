import React from 'react'

import TituloPaginaEnviada from './tituloprincipalenviada.jsx'
import EnvioCorreoCotizacion from './enviocorreocotizacion.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'

export default function EnviadaCotizacion({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginaEnviada proporcional={proporcional}/>
        <EnvioCorreoCotizacion proporcional={proporcional}/>
        <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}
