import React from 'react'

import jefe_obra from '../../assets/images/jefe_obra.png'

export default function QuienesSomos({proporcional}) {

  return (
    <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: '#f5f6f6'}}>
        <div className='d-flex' style={{width: 1220 / proporcional}}>
          <div className='' style={{width: 800 / proporcional, marginRight: 20 / proporcional, height: 380 / proporcional,
                paddingTop: 43 / proporcional, paddingBottom: 43 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: '#007BA7', marginBottom: 17 / proporcional}}>¿QUIENES SOMOS?</p>
            <p style={{fontSize: 34 / proporcional, fontWeight: 500, color: '#007BA7', marginBottom: 23 / proporcional}}>Comfisa - </p>
            <p style={{fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(95, 101, 109)'}}>
              Somos una empresa familiar con mas de 8 años de experiencia ofreciendo productos y servicio de calidad. Contamos con el respaldo de marcas como aceros arequipa, cemento inka, piramide entre otras marcas,como distribuidores autorizados; por ello manejos el mejor precio del mercado para mayoristas y minoritas. Contamos con una amplio portafolio de productos para la contruccion. Nuestro éxito está basado en una clara visión empresarial, capital humano y calidad que brindamos a nuestros clientes. Buscamos liderar todos los mercados en los que participamos siendo la mejor solución para nuestros clientes.
            </p>
          </div>
          <img src={jefe_obra} style={{width: 380 / proporcional, height: 380 / proporcional}}/>
        </div>
    </div>
  )
}