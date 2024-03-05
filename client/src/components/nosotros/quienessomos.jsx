import React from 'react'

import jefe_obra from '../../assets/images/jefe_obra.png'

export default function QuienesSomos({proporcional}) {

  return (
    <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: '#f5f6f6'}}>
        <div className='d-flex' style={{width: 1220 / proporcional}}>
          <div className='' style={{width: 800 / proporcional, marginRight: 20 / proporcional, height: 380 / proporcional,
                paddingTop: 43 / proporcional, paddingBottom: 43 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(41, 41, 41)', marginBottom: 17 / proporcional}}>¿QUIENES SOMOS?</p>
            <p style={{fontSize: 34 / proporcional, fontWeight: 500, color: '#292929', marginBottom: 23 / proporcional}}>Comfisa - </p>
            <p style={{fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(95, 101, 109)'}}>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
          <img src={jefe_obra} style={{width: 380 / proporcional, height: 380 / proporcional}}/>
        </div>
    </div>
  )
}