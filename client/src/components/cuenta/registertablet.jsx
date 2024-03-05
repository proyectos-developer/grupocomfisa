import React from 'react'

import TituloPaginaTablet from './register/tituloprincipaltablet.jsx'
import SignupTablet from './signuptablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function RegisterTablet({proporcional}) {

    const begin = useSelector (({begin_data}) => begin_data)

    return (
        <div style={{width: '100%'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <SignupTablet proporcional={proporcional}/>
            <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipalTablet proporcional={proporcional}/>
            <FooterTablet proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
