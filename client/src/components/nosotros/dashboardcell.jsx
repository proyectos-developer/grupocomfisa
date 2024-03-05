import React from 'react'

import TituloPaginaCell from './tituloprincipalcell.jsx'
import SliderPrincipalCell from './sliderprincipalcell.jsx'
import QuienesSomosCell from './quienessomoscell.jsx'
import AlgunosHechosCell from './algunoshechoscell.jsx'
import MarcasTrabajamosCell from './marcastrabajamoscell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'

export default function SobreNosotrosCell({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginaCell proporcional={proporcional}/>
        <SliderPrincipalCell proporcional={proporcional}/>  
        <QuienesSomosCell proporcional={proporcional}/>
        <AlgunosHechosCell proporcional={proporcional}/>
        <MarcasTrabajamosCell proporcional={proporcional}/>
        <FooterPrincipalCell proporcional={proporcional}/>
        <FooterCell proporcional={proporcional}/>
    </div>
  )
}
