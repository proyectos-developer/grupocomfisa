import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icono_cross_black from '../../assets/iconos/icono_cross_black_96.png'

import { set_open_menu_carrito } from '../../redux/actions/dataactions';
import { useNavigate } from 'react-router-dom';

import CardProductoMenuTablet from './menu/productotablet.jsx'
import {carritodata} from '../../redux/slice/carritodata.js';
import { carritoConstants } from '../../uri/carrito-constants.js';

export default function MenuLateralCarritoTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [lista_cotizar, setListaCotizar] = useState([])

    const {lista_carrito_cotizacion} = useSelector(({datareducer}) => datareducer)

    useEffect(() => {
        if (lista_carrito_cotizacion){
            setListaCotizar (lista_carrito_cotizacion)
        }
    }, [lista_carrito_cotizacion])

    return (
        <div className='position-absolute top-0 end-0 shadow vh-100'
            style={{width: 418 / proporcional, zIndex: 99999, background: 'white'}}>
            <div className='d-flex justify-content-between' 
                    style={{width: 418 / proporcional, padding: 30 / proporcional, marginBottom: 30 / proporcional,
                    background: '#f5f5f5'}}>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, marginBottom: 0}}>
                Lista de productos para cotizar ({lista_cotizar.length})
                </p>
                <img src={icono_cross_black} style={{width: 15 / proporcional, height: 15 / proporcional, marginTop: 2.5 / proporcional,
                    marginBottom: 2.5 / proporcional, cursor: 'pointer'}}
                    onClick={() => {dispatch(set_open_menu_carrito(false)); window.scrollTo(0, 0)}}/>
            </div>
            <div className='overflow-auto' style={{width: '100%', height: 670 / proporcional}}>
                {
                    lista_cotizar && lista_cotizar.length > 0 ? (
                        lista_cotizar.map ((cotizar, index) => {
                            return (
                                <CardProductoMenuTablet cotizar={cotizar} proporcional={proporcional}/>
                            )
                        })
                    ) : null
                }
            </div>
            <div className='shadow-lg' style={{with: 418 / proporcional, padding: 30 / proporcional, paddingRight: 10 / proporcional, height: 'auto'}}>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                        onClick={() => {dispatch(set_open_menu_carrito(false)); navigate('/lista-cotizar'); window.scrollTo(0, 0)}}>
                    Ver lista a cotizar
                </button>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                        onClick={() => {dispatch(set_open_menu_carrito(false)); window.scrollTo(0, 0)}}>
                    Volver
                </button>
            </div>
        </div>
    )
}