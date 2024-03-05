import React from 'react'

import fondo_nosotros from '../../assets/images/fondo_nosotros.png'

export default function SliderPrincipal({proporcional}) {

  return (
    <div className='position-relative' 
        style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
        <div className='position-absolute' style={{width: 1220 / proporcional, height: 500 / proporcional, background: 'rgba(39, 39, 39, 0.4)',
                top: 50 / proporcional, left: 350 / proporcional}}/>
        <img src={fondo_nosotros} style={{width: 1220 / proporcional, height: 500 / proporcional}}/>
    </div>
  )
}
