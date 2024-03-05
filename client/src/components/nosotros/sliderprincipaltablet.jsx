import React from 'react'

import fondo_nosotros from '../../assets/images/fondo_nosotros_tablet.png'

export default function SliderPrincipal({proporcional}) {

  return (
    <div className='position-relative' 
        style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
        <div className='position-absolute' style={{width: 871 / proporcional, height: 500 / proporcional, background: 'rgba(39, 39, 39, 0.4)',
                top: 50 / proporcional, left: 60 / proporcional}}/>
        <img src={fondo_nosotros} style={{width: 871 / proporcional, height: 500 / proporcional}}/>
    </div>
  )
}
