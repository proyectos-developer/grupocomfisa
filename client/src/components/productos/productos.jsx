import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import ListaProductosProveedor from './listaproductosproveedor.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'
import ModalCargando from '../modal/cargando.jsx'

import { useSelector } from 'react-redux'
 
export default function ProductosProveedor({proporcional}) {

    const productos_data = useSelector(({productos_data}) => productos_data)

    return (
        <div style={{width: '100%'}}>
            <TituloPagina proporcional={proporcional}/>
            <ListaProductosProveedor proporcional={proporcional}/>           
            <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                        marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipal proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
            <ModalCargando loading={productos_data.loading}/>
        </div>
    )
}