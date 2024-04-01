import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../../../assets/logo_texto_48.png'
import icono_cell from '../../../../assets/iconos/icono_cell.png'

export default function TituloPedidoCell({proporcional, nro_pedido, fecha_pedido}) {

    const navigate = useNavigate()

    return (
        <div className='' style={{width: '100%', height: 176 / proporcional, paddingLeft: 20 / proporcional,  paddingRight: 20 / proporcional,
                                                   background: '#f9f9f9', paddingTop: 4 / proporcional, paddingBottom: 6 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 56 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional}}>
                    <img src={logo} style={{width: 192 / proporcional, height: 48 / proporcional}} onClick={() => navigate ('/')}/>
                </div>
            <div className='' style={{height: 56 / proporcional, borderBottom: '2px solid #fafafa'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional, paddingTop: 2 / proporcional,
                    paddingBottom: 2 / proporcional}}>
                    <img src={icono_cell} style={{width: 29 / proporcional, height: 29 / proporcional, marginTop: 7.5 / proporcional, marginBottom: 7.5 / proporcional, 
                            marginRight: 15 / proporcional}}/>
                    <div style={{}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#5f656d', marginBottom: 0, fontWeight: 400}}>
                        Contácto
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', marginBottom: 0, fontWeight: 600}}>
                        +51 979 357 290
                        </p>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 64 / proporcional, borderBottom: '2px solid #fafafa', background: '#f9f9f9'}}>
                <div className='d-flex justify-content-start' style={{width: '50%', height: 64 / proporcional, borderBottom: '2px solid #fafafa'}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${64 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 400}}>
                        Número de pedido: <span style={{fontSize: 18 / proporcional, fontWeight: 600, color: '#007BA7'}}>{nro_pedido}</span>
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 64 / proporcional, borderBottom: '2px solid #fafafa'}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${64 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 400}}>
                        Fecha de pedido: <span style={{fontSize: 18 / proporcional, fontWeight: 600, color: '#007BA7'}}>{fecha_pedido.split('T')[0]}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}