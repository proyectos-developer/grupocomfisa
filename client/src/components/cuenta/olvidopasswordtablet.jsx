import React from 'react'

import TituloPaginaTablet from './olvido/tituloprincipaltablet.jsx'
import IngresarEmailTablet from './ingresaremailtablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function OlvidoPasswordTablet({proporcional}) {

    const begin = useSelector(({begin_data}) => begin_data)
    
    return (
        <div style={{width: '100%'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <IngresarEmailTablet proporcional={proporcional}/>
            <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipalTablet proporcional={proporcional}/>
            <FooterTablet proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
