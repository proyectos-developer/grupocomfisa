import React from 'react'

import TituloPagina from './signin/tituloprincipal.jsx'
import Login from './login.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function Signin({proporcional}) {

    const begin = useSelector(({begin_data}) => begin_data)
    
    return (
        <div style={{width: '100%'}}>
            <TituloPagina proporcional={proporcional}/>
            <Login proporcional={proporcional}/>
            <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipal proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
