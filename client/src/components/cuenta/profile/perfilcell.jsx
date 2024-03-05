import React from 'react'

import TituloPaginaCell from './tituloprincipalcell.jsx'
import DataInfoCell from './datainfocell.jsx'
import MenuCuentaCell from '../menu/cuentacell.jsx'
import FooterPrincipalCell from '../../footerprincipalcell.jsx'
import FooterCell from '../../footercell.jsx'
import ModalCargando from '../../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function RegisterCell({proporcional}) {

    const begin = useSelector (({begin_data}) => begin_data)

    return (
        <div style={{width: '100%'}}>
            <TituloPaginaCell proporcional={proporcional}/>
            <MenuCuentaCell proporcional={proporcional}/>
            <DataInfoCell proporcional={proporcional}/>
            <div style={{width: 459 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipalCell proporcional={proporcional}/>
            <FooterCell proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
