import React from 'react'

import TituloPaginaCell from './signin/tituloprincipalcell.jsx'
import LoginCell from './logincell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useSelector } from 'react-redux'

export default function SigninCell({proporcional}) {

    const begin = useSelector(({begin_data}) => begin_data)

    return (
        <div style={{width: '100%'}}>
            <TituloPaginaCell proporcional={proporcional}/>
            <LoginCell proporcional={proporcional}/>
            <div style={{width: 459 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                            marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
            <FooterPrincipalCell proporcional={proporcional}/>
            <FooterCell proporcional={proporcional}/>
            <ModalCargando loading={begin.loading}/>
        </div>
    )
}
