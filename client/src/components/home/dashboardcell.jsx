import React from 'react'

import SliderHomeCell from '../dashboard/slidercell.jsx'
import ProductosProveedoresCell from '../dashboard/productoscell.jsx'
import CotizarAquiCell from '../dashboard/cotizarcell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'
import { useSelector } from 'react-redux'
import ModalCargando from '../modal/cargando.jsx'

export default function DashboardHomeTablet({proporcional}) {

    const productos_data = useSelector(({productos_data}) => productos_data)

    return (
        <div className='' style={{width: '100%', height:'auto'}}>
            <SliderHomeCell proporcional={proporcional}/>
            <ProductosProveedoresCell proporcional={proporcional}/>
            <CotizarAquiCell proporcional={proporcional}/>
            <ModalCargando loading={productos_data.loading}/>
            <FooterPrincipalCell proporcional={proporcional}/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}
