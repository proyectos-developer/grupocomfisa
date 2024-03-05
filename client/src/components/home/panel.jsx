import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'

import BarraMenu from '../barramenu.jsx'
import MenuLateralCarrito from '../carrito/menulateral.jsx'
import {carritodata} from '../../redux/slice/carritodata.js';
import { carritoConstants } from '../../uri/carrito-constants.js';
import { set_authenticated, set_lista_carrito_cotizacion } from '../../redux/actions/dataactions.js';

export default function PanelHome({proporcional}) {

  const dispatch = useDispatch()

  const {open_menu_carrito, authenticated} = useSelector(({datareducer}) => datareducer)
  const {get_lista_cotizar} = useSelector (({carrito_data}) => carrito_data)

  useEffect(() => {
    if (window.localStorage.getItem('session_id')){
      dispatch(set_authenticated(true))
    }
    if (window.localStorage.getItem ('shop_id')){
      obtener_carrito_cotizacion (window.localStorage.getItem ('shop_id'))
    }
  }, [])

  useEffect (() => {
    if (get_lista_cotizar && get_lista_cotizar.success && get_lista_cotizar.lista_cotizar){
      dispatch(set_lista_carrito_cotizacion(get_lista_cotizar.lista_cotizar))
    }
  }, [get_lista_cotizar])

  const obtener_carrito_cotizacion = (shop_id) => {
    dispatch(carritodata (carritoConstants(0, shop_id, {}, false).get_lista_cotizar))
  }
  
  return (
    <div style={{width: '100%'}} className='position-relative'>
        <BarraMenu proporcional={proporcional}/>
        {
          open_menu_carrito ? (
            <MenuLateralCarrito proporcional={proporcional}/>
          ) : null
        }
        <a href='https://wa.me/51979357290?text=Hola,%20vi%20tu%20página%20web%20y%20me%20gustaría%20mas%20información%20sobre%20tus%20productos.' target='_blank' rel='noopener noreferrer'>
            <img alt='whatsapp' className='position-fixed' src="https://img.icons8.com/fluent/72/000000/whatsapp.png" 
                style={{bottom: 36 / proporcional, right: 36 / proporcional, zIndex: 99999}}/>
        </a>
        <Outlet/>
    </div>
  )
}