import React from 'react'

import SliderHomeTablet from '../dashboard/slidertablet.jsx'
import ProductosProveedoresTablet from '../dashboard/productostablet.jsx'
import CotizarAquiTablet from '../dashboard/cotizartablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function DashboardHomeTablet({proporcional}) {

    const productos_data = useSelector(({productos_data}) => productos_data)

    return (
        <div className='position-relative' style={{background: '#f9f9f9'}}>
            <div className='position-absolute' style={{width: '100%', height: 'auto', zIndex: 1, top: -28 / proporcional}}>
                <SliderHomeTablet proporcional={proporcional}/>
                <ProductosProveedoresTablet proporcional={proporcional}/>
                <CotizarAquiTablet proporcional={proporcional}/>
                <ModalCargando loading={productos_data.loading}/>
                <FooterPrincipalTablet proporcional={proporcional}/>
                <FooterTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}
