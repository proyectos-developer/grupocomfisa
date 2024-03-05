import React from 'react'

import TituloPaginaTablet from './tituloprincipaltablet.jsx'
import DataInfoTablet from './datainfotablet.jsx'
import MenuCuentaTablet from '../menu/cuentatablet.jsx'
import FooterPrincipalTablet from '../../footerprincipaltablet.jsx'
import FooterTablet from '../../footertablet.jsx'
import ModalCargando from '../../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function PerfilCuentaTablet({proporcional}) {

    const begin = useSelector (({begin_data}) => begin_data)

    return (
        <div style={{width: '100%'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', textAlign: 'center',
                        fontWeight: 500, marginBottom: 25 / proporcional, marginTop: 85 / proporcional}}>
                MI INFORMACIÓN
            </p>
            <div className='d-flex' style={{width: 871 / proporcional, height: 'auto', marginLeft: 60 / proporcional, marginRight: 60 / proporcional, 
                    marginBottom: 60 / proporcional}}>
                <div style={{width: 300 / proporcional, height: 'auto'}}>
                    <MenuCuentaTablet proporcional={proporcional}/>
                </div>
                <div style={{width: 571 / proporcional, height: 'auto'}}>
                    <DataInfoTablet proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: 871 / proporcional, marginLeft: 60 / proporcional, marginRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipalTablet proporcional={proporcional}/>
            <FooterTablet proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
