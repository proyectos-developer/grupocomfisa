import React from 'react'

import fondo_nosotros from '../../assets/images/fondo_nosotros_cell.png'

export default function SliderPrincipalCell({proporcional}) {

  return (
    <div className='position-relative' 
        style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
        <div className='position-absolute' style={{width: 459 / proporcional, height: 500 / proporcional, background: 'rgba(39, 39, 39, 0.4)',
                top: 50 / proporcional, left: 20 / proporcional}}/>
        <img src={fondo_nosotros} style={{width: 459 / proporcional, height: 500 / proporcional}}/>
    </div>
  )
}
