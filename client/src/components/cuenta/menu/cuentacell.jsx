import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {begindata} from '../../../redux/slice/begindata'
import { beginConstants } from '../../../uri/begin-constants'
import { set_authenticated, set_lista_carrito_cotizacion } from '../../../redux/actions/dataactions'

export default function MenuCuentaCell({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch ()

    const {log_out} = useSelector(({begin_data}) => begin_data)

    useEffect (() => {
        if (log_out && log_out.success){
            window.localStorage.removeItem ('usuario')
            window.localStorage.removeItem ('session_id')
            window.localStorage.removeItem ('correo')
            dispatch(begindata(beginConstants({}, true, 0).log_out))
            dispatch (set_lista_carrito_cotizacion([]))
            dispatch(set_authenticated(false))
            navigate('/')
        }
    }, [log_out])

    const cerrar_sesion = () => {
        dispatch (begindata(beginConstants({}, false, 0).log_out))
    }
    
    return (
        <div style={{width: 459 / proporcional, height: 'auto', marginLeft: 20 / proporcional, marginRight: 20 / proporcional, marginTop: 60 / proporcional,
                    marginBottom: 60 / proporcional}}>
            <div className='rounded' style={{width: 459 / proporcional, height: 'auto', border: '1px solid #384da7'}}>
                <div style={{width: 457 / proporcional, height: 50 / proporcional, borderBottom: '1px solid #384da7', 
                        background: location.pathname.split('/')[2] === 'perfil' ? '#384da7' : 'rgba(39, 39, 39, 0.2)', paddingLeft: 20 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, 
                        color: location.pathname.split ('/')[2] === 'perfil' ? 'white' : '#384da7', cursor: 'pointer',
                        fontWeight: location.pathname.split ('/')[2] === 'perfil' ? 700 : 500}}
                        onClick={() => navigate('/cuenta/perfil')}>MI PERFIL</p>
                </div>
                <div style={{width: 457 / proporcional, height: 50 / proporcional, borderBottom: '1px solid #384da7', 
                        background: location.pathname.split('/')[2] === 'favoritos' ? '#384da7' : 'rgba(39, 39, 39, 0.2)', paddingLeft: 20 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, 
                        color: location.pathname.split ('/')[2] === 'favoritos' ? 'white' : '#384da7', cursor: 'pointer',
                        fontWeight: location.pathname.split ('/')[2] === 'favoritos' ? 700 : 500}}
                        onClick={() => navigate('/cuenta/favoritos')}>MIS FAVORITOS</p>
                </div>
                <div style={{width: 457 / proporcional, height: 50 / proporcional, borderBottom: '1px solid #384da7', 
                        background: location.pathname.split('/')[2] === 'cotizaciones' ? '#384da7' : 'rgba(39, 39, 39, 0.2)', paddingLeft: 20 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, 
                        color: location.pathname.split ('/')[2] === 'cotizaciones' ? 'white' : '#384da7', cursor: 'pointer',
                        fontWeight: location.pathname.split ('/')[2] === 'cotizaciones' ? 700 : 500}}
                        onClick={() => navigate('/cuenta/cotizaciones')}>MIS COTIZACIONES</p>
                </div>
                <div style={{width: 457 / proporcional, height: 50 / proporcional,
                        background: 'rgba(39, 39, 39, 0.2)', paddingLeft: 20 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, 
                        color: '#384da7', cursor: 'pointer',
                        fontWeight: 500}}
                        onClick={() => cerrar_sesion()}>CERRAR SESIÓN</p>
                </div>
            </div>
        </div>
    )
}