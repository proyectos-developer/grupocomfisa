import React, { useEffect } from 'react'

import CardProductoConfirmarTablet from './card/productoconfirmartablet.jsx'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {correodata} from '../../redux/slice/correodata.js';
import {correoConstants} from '../../uri/correo-constants.js'
import {carritodata} from '../../redux/slice/carritodata.js';
import { carritoConstants } from '../../uri/carrito-constants.js';
import { set_lista_carrito_cotizacion } from '../../redux/actions/dataactions.js';
import ModalCargando from '../modal/cargando.jsx';

export default function ListaConfirmacionTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {lista_carrito_cotizacion} = useSelector(({datareducer}) => datareducer)
    const {send_correo_cotizacion} = useSelector(({correo_data}) => correo_data)
    const {get_lista_cotizar} = useSelector (({carrito_data}) => carrito_data)
    const carrito_data = useSelector (({carrito_data}) => carrito_data)

    useEffect(() =>  {
        if (get_lista_cotizar && get_lista_cotizar.success === true && get_lista_cotizar.lista_cotizar){
            dispatch (carritodata(carritoConstants(0, 0, {}, true).get_lista_cotizar))
            dispatch(set_lista_carrito_cotizacion(get_lista_cotizar.lista_cotizar))
            navigate ('/lista-cotizar')
        }
    }, [get_lista_cotizar])
 
    useEffect(() => {
        if (send_correo_cotizacion && send_correo_cotizacion.message && send_correo_cotizacion.message.accepted){
            dispatch (correodata(correoConstants({},true, 0, 0).send_correo_cotizacion))
            navigate('/lista-cotizar/enviada')
            window.scrollTo(0, 0)
        }
    }, [send_correo_cotizacion])

    const enviar_correo_cotizacion = () => {
        dispatch (correodata(correoConstants({},false, window.localStorage.getItem('shop_id'), window.localStorage.getItem('usuario')).send_correo_cotizacion))
    }

    const volver_lista_confirmacion = () => {
        dispatch (carritodata(carritoConstants(0, window.localStorage.getItem ('shop_id'), {}, false).get_lista_cotizar))
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
                <div className='d-flex' style={{width: 871 / proporcional, height: 60 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div style={{width: 304.85, height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Producto
                        </p>
                    </div>
                    <div style={{width: 127.1 / proporcional, height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Cantidad
                        </p>
                    </div>
                    <div style={{width: 429.05 / proporcional, height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Detalles requeridos
                        </p>
                    </div>
                </div>
                {
                    lista_carrito_cotizacion && lista_carrito_cotizacion.length > 0 ?(
                        lista_carrito_cotizacion.map ((producto_cotizar, index) => {
                            return (
                                <CardProductoConfirmarTablet producto={producto_cotizar} proporcional={proporcional}/>
                            )
                        })
                    ) : null
                }
                <div className='d-flex justify-content-between' style={{width: 871 / proporcional, height: 60 / proporcional, marginTop: 50 / proporcional}}>
                    <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                            fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                            onClick={() => volver_lista_confirmacion ()}>
                        Volver
                    </button>
                    <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                            fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                            onClick={() => {enviar_correo_cotizacion()}}>
                        Confirmar
                    </button>
                </div>
            </div>
            {
                carrito_data.loading ? (
                    <ModalCargando loading={carrito_data.loading}/>
                ): null
            }
        </div>
    )
}
