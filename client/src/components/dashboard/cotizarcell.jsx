import React from 'react'

import fondo_cotizar from '../../assets/images/fondo_cotizar.png'

export default function CotizarAquiCell({proporcional}) {

  return (
    <div style={{background: '#ededed', height: 'auto', width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                paddingTop: 140 / proporcional, marginBottom: 50 / proporcional}}>
        <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
            <div className='' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, marginBottom: 50 / proporcional}}>
                <p style={{textAlign: 'center', fontSize: 46 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#222931', fontWeight: 500, marginBottom: 13 / proporcional}}>
                    Cotiza con nosotros
                </p>
                <p style={{textAlign: 'center', fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#222931', fontWeight: 400, marginBottom: 26 / proporcional}}>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>
                <div className='justify-content-center d-flex' style={{width: '100%', marginBottom: 50 / proporcional}}>
                    <button className='btn' style={{width: 170 / proporcional, height: 42 / proporcional, background: '#d18e32', color: 'white', 
                            fontSize: 16 / proporcional, fontWeight: 700}}>Cotiza aquí</button>
                </div> 
            </div> 
            <div className='justify-content-center d-flex' style={{width: 459 / proporcional, height: 530 / proporcional}}>
                <img src={fondo_cotizar} style={{width: 459 / proporcional, height: 530 / proporcional}}/>
            </div>
        </div>
    </div>
  )
}