import React from 'react'

import TituloPaginaTablet from './tituloprincipaltablet.jsx'
import SliderPrincipalTablet from './sliderprincipaltablet.jsx'
import QuienesSomosTablet from './quienessomostablet.jsx'
import AlgunosHechosTablet from './algunoshechostablet.jsx'
import MarcasTrabajamosTablet from './marcastrabajamostablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'

export default function SobreNosotrosTablet({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginaTablet proporcional={proporcional}/>
        <SliderPrincipalTablet proporcional={proporcional}/>  
        <QuienesSomosTablet proporcional={proporcional}/>
        <AlgunosHechosTablet proporcional={proporcional}/>
        <MarcasTrabajamosTablet proporcional={proporcional}/>
        <FooterPrincipalTablet proporcional={proporcional}/>
        <FooterTablet proporcional={proporcional}/>
    </div>
  )
}
