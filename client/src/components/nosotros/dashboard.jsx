import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import SliderPrincipal from './sliderprincipal.jsx'
import QuienesSomos from './quienessomos.jsx'
import AlgunosHechos from './algunoshechos.jsx'
import MarcasTrabajamos from './marcastrabajamos.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'

export default function SobreNosotros({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPagina proporcional={proporcional}/>
        <SliderPrincipal proporcional={proporcional}/>  
        <QuienesSomos proporcional={proporcional}/>
        <AlgunosHechos proporcional={proporcional}/>
        <MarcasTrabajamos proporcional={proporcional}/>
        <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}
