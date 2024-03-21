import React from 'react'

import TituloPagina from './olvido/tituloprincipal.jsx'
import IngresarEmail from './ingresaremail.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function OlvidoPassword({proporcional}) {

    const begin = useSelector(({begin_data}) => begin_data)
    
    return (
        <div style={{width: '100%'}}>
            <TituloPagina proporcional={proporcional}/>
            <IngresarEmail proporcional={proporcional}/>
            <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipal proporcional={proporcional}/>
            <Footer proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
