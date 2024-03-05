import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import ListaCotizaciones from './cotizaciones.jsx'
import MenuCuenta from '../menu/cuenta.jsx'
import FooterPrincipal from '../../footerprincipal.jsx'
import Footer from '../../footer.jsx'
import ModalCargando from '../../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function CotizacionesCuenta({proporcional}) {

    const begin = useSelector (({begin_data}) => begin_data)

    return (
        <div style={{width: '100%'}}>
            <TituloPagina proporcional={proporcional}/>
            <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', textAlign: 'center',
                        fontWeight: 500, marginBottom: 25 / proporcional, marginTop: 85 / proporcional}}>
                MIS COTIZACIONES
            </p>
            <div className='d-flex' style={{width: 1200 / proporcional, height: 'auto', marginLeft: 350 / proporcional, marginRight: 350 / proporcional, 
                    marginBottom: 60 / proporcional}}>
                <div style={{width: 300 / proporcional, height: 'auto'}}>
                    <MenuCuenta proporcional={proporcional}/>
                </div>
                <div style={{width: 900 / proporcional, height: 'auto'}}>
                    <ListaCotizaciones proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipal proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
