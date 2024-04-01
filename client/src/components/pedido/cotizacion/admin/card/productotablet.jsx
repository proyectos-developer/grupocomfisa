import React, { useState } from 'react'

import icono_save from '../../../../../assets/iconos/icono_guardar_blue_96.png'
import icono_guardado from '../../../../../assets/iconos/icono_guardado_blue_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../../../redux/slice/carritodata'
import { carritoConstants } from '../../../../../uri/carrito-constants'

import ModalCargando from '../../../../modal/cargando'
import axios from 'axios'

export default function ProductoTablet({proporcional, producto}) {

    const dispatch = useDispatch()

    const [precio, setPrecio] = useState(0)
    const [eprecio, setEPrecio] = useState(0)
    const [observaciones, setObservaciones] = useState(0)

    const [loading, setLoading] = useState(0)

    const {update_precio_observaciones_estado_producto} = useSelector(({carrito_data}) => carrito_data)
    


    const actualizar_producto_datos = () => {
        if (precio === 0){
            setEPrecio(precio === 0 ? true : false)
        }else{
            const data_precio = {
                precio: precio,
                observaciones: observaciones,
                estado: 'enviado'
            }
            axios.post(`http://localhost:3001/api/cotizar/precio/observaciones/${producto.shop_id}/${producto.id}`, data_precio)
                .then ((res) => {
                    setLoading(1)
                }).catch((err) => {
                    setLoading(0)
                })
        }
    }

    return (
        <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', padding: 10 / proporcional, borderBottom: '1px solid #efefef'}}>
                <div className='d-flex justify-content-center' style={{width: '10%', height: 'auto', borderRight: '1px solid #efefef'}}>
                    <img src={producto.foto_uno} style={{width: 80 / proporcional, height: 80 / proporcional}}/>
                </div>
                <div className='' style={{width: '25%', height: 'auto', borderRight: '1px solid #efefef', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600}}>
                        {producto.proveedor} 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        {producto.producto} 
                    </p>
                </div>
                <div className='' style={{width: '10%', height: 'auto', borderRight: '1px solid #efefef', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600, textAlign: 'center'}}>
                        Cantidad:
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                        {producto.cantidad} 
                    </p>
                </div>
                <div className='' style={{width: '65%', height: 'auto', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600}}>
                        Comentarios:
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        {producto.comentarios} 
                    </p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto', padding: 10 / proporcional}}>
                <div className='' style={{width: '25%', height: 'auto', borderRight: '1px solid #efefef', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: '#007BA7', fontWeight: 600}}>
                        PRECIO 
                    </p>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                        <div style={{width: '20%', height: 50 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 10 / proporcional, color: '#007BA7', fontWeight: 600}}>
                                S/. 
                            </p>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '60%', height: 50 / proporcional}}>
                            <input type='number'
                                className='form-control'
                                style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: '#212121', fontWeight: 400, border: eprecio ? '1px solid red' : ''}}
                                value={precio}
                                onChange={(event) => setPrecio(event.target.value)}
                                placeholder='0'/>
                        </div>
                    </div>
                </div>
                <div className='' style={{width: '65%', height: 'auto', paddingLeft: 10 / proporcional, borderRight: '1px solid #efefef'}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: '#007BA7', fontWeight: 600}}>
                        Observaciones:
                    </p>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 120 / proporcional}}>
                        <textarea type='number'
                            rows={3}
                            className='form-control'
                            style={{width: '95%', height: 120 / proporcional, fontSize: 20 / proporcional, color: '#212121', fontWeight: 400}}
                            value={observaciones}
                            onChange={(event) => setObservaciones(event.target.value)}
                            placeholder='Observaciones'/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '10%', height: 'auto', borderRight: '1px solid #efefef'}}>
                    <img src={loading === 0 ? icono_save : icono_guardado} style={{width: 48 / proporcional, height: 48 / proporcional, marginTop: 51 / proporcional, cursor: 'pointer'}}
                    onClick={() => actualizar_producto_datos()}/>
                </div>
            </div>
        </div>
    )
}