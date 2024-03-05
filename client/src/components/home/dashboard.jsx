import React from 'react'

import SliderHome from '../dashboard/slider.jsx'
import ProductosProveedores from '../dashboard/productos.jsx'
import CotizarAqui from '../dashboard/cotizar.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function DashboardHome({proporcional}) {

    const productos_data = useSelector(({productos_data}) => productos_data)

    return (
        <div className='position-relative' style={{background: '#f9f9f9'}}>
            <div className='position-absolute' style={{width: '100%', height: 'auto', zIndex: 1, top: -28 / proporcional}}>
                <SliderHome proporcional={proporcional}/>
                <ProductosProveedores proporcional={proporcional}/>
                <CotizarAqui proporcional={proporcional}/>
                <ModalCargando loading={productos_data.loading}/>
                <FooterPrincipal proporcional={proporcional}/>
                <Footer proporcional={proporcional}/>
            </div>
        </div>
    )
}
