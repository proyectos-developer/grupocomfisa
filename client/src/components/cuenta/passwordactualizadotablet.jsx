import React from 'react'

import TituloPaginaTablet from './actualizado/tituloprincipaltablet.jsx'
import ActualizacionCorrectaTablet from './actualizacionaorrectatablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function PasswordActualizadoTablet({proporcional}) {

    const begin = useSelector(({begin_data}) => begin_data)
    
    return (
        <div style={{width: '100%'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <ActualizacionCorrectaTablet proporcional={proporcional}/>
            <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipalTablet proporcional={proporcional}/>
            <FooterTablet proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
