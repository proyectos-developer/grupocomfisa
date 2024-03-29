import React, { useEffect, useState } from 'react'

import icono_menu_white from '../assets/iconos/icono_menu_white_96.png'
import logo from '../assets/logo_texto_48.png'
import icono_cell from '../assets/iconos/icono_cell.png'
import icono_clock from '../assets/iconos/icono_clock.png'
import icono_cuenta_perfil from '../assets/iconos/menu_cuenta_perfil.png'
import icono_cuenta_favoritos from '../assets/iconos/menu_cuenta_favoritos.png'
import icono_cuenta_cotizaciones from '../assets/iconos/menu_cuenta_cotizaciones.png'
import icono_cuenta_logout from '../assets/iconos/menu_cuenta_logout.png'
import triangulo_menu from '../assets/iconos/triangulo_menu.png'

import icono_favoritos_white from '../assets/iconos/icono_favoritos_white_96.png'
import icono_lupa_white from'../assets/iconos/icono_lupa_white_96.png'
import icono_carrito_white from '../assets/iconos/icono_car_white_96.png'
import icono_perfil_white from '../assets/iconos/icono_perfil_white_96.png'

import icono_favoritos_black from '../assets/iconos/icono_favoritos_black_96.png'
import icono_lupa_black from '../assets/iconos/icono_lupa_black_96.png'
import icono_carrito_black from '../assets/iconos/icono_car_black_96.png'
import icono_perfil_black from '../assets/iconos/icono_perfil_black_96.png'
import icono_left from '../assets/iconos/arrow_left_white_96.png'
import icono_right from '../assets/iconos/arrow_right_white_96.png'
import icono_dot_white from '../assets/iconos/icono_dot_white_96.png'

import icono_dot from '../assets/iconos/icono_menu_dot.png'

import icono_arrow_down from '../assets/iconos/icono_arrow_down.png'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CardProductoCotizarCell from './barra/productocotizarcell.jsx'
import {productosdata} from '../redux/slice/productosdata.js'
import { productosConstants } from '../uri/productos-constants.js'
import { set_authenticated, set_lista_carrito_cotizacion, set_productos_proveedor } from '../redux/actions/dataactions.js'
import {begindata} from '../redux/slice/begindata.js'
import { beginConstants } from '../uri/begin-constants.js'

export default function BarraMenuCell({proporcional}) {

    const navigate = useNavigate ()
    const location = useLocation()
    const dispatch = useDispatch()

    const [open_menu, setOpenMenu] = useState(false)
    const [open_sub_menu, setOpenSubMenu] = useState(false)
    const [open_menu_carrito, setOpenMenuCarrito] = useState(false)
    const [menu, setMenu] = useState('')
    const [menu_perfil, setMenuPerfil] = useState(false)
    const [menu_opcion, setMenuOpcion] = useState('inicio')

    const [cantidad_lista_cotizar, setCantidadLitaCotizar] = useState(0)
    const [lista_cotizar, setListaCotizar] = useState(0)

    const {lista_carrito_cotizacion, authenticated} = useSelector(({datareducer}) => datareducer)
    const {get_proveedor_detalles_productos} = useSelector (({productos_data}) => productos_data)
    const {log_out} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
        setListaCotizar(lista_carrito_cotizacion)
        setCantidadLitaCotizar (lista_carrito_cotizacion.length)
    }, [lista_carrito_cotizacion])

    useEffect(() => {
      setMenuOpcion (location.pathname.split ('/')[1] === 'sobre-nosotros' ? 'nosotros' :
                    location.pathname.split ('/')[1] === 'tienda' ? 'tienda' :
                    location.pathname.split ('/')[1] === 'contacto' ? 'contacto' :
                    location.pathname.split ('/')[1] === 'proveedores' ? 'proveedores' : 'inicio')
    }, [location.pathname])

    useEffect (() => {
      if (get_proveedor_detalles_productos && get_proveedor_detalles_productos.success === true && get_proveedor_detalles_productos.productos &&
          get_proveedor_detalles_productos.total_productos){
            dispatch (productosdata(productosConstants(0, 0, 0, 0, 0, 0, 0, {}, true).get_proveedor_detalles_productos))
            dispatch(set_productos_proveedor({productos: get_proveedor_detalles_productos.productos, total_productos: get_proveedor_detalles_productos.total_productos,
                  proveedor: get_proveedor_detalles_productos.proveedor }))
            navigate(`/proveedor/${get_proveedor_detalles_productos.productos[0].proveedor.replace(' ', '-')}`)
      }
    }, [get_proveedor_detalles_productos])
  
    useEffect (() => {
        if (log_out && log_out.success === true){
            borrar_datos_sesion()
        }
    }, [log_out])

    const borrar_datos_sesion = async() => {
          window.localStorage.removeItem('usuario')
          window.localStorage.removeItem('correo')
          window.localStorage.removeItem('session_id')
          window.localStorage.removeItem('shop_id')
          dispatch (begindata(beginConstants({}, true, 0).log_out))
          dispatch (set_lista_carrito_cotizacion([]))
          dispatch(set_authenticated(false))
          setMenuPerfil(false)
          navigate('/')
    }

    const ver_productos_proveedor = (id_proveedor) => {
        dispatch(productosdata(productosConstants(id_proveedor, 0, 0, 0, 0, 0, 9, {}, false).get_proveedor_detalles_productos))
    }

    const ver_perfil = () => {
      if (!authenticated){
        navigate ('/signin')
      }else{
        setMenuPerfil(!menu_perfil)
      }
    }

    const cerrar_sesion = () => {
      dispatch (begindata(beginConstants({}, false, 0).log_out))
    }

    return (
      <div className='' style={{height: 120 / proporcional, background: '#f9f9f9', paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
        <div className='d-flex justify-content-center' style={{height: 56 / proporcional, paddingTop: 4 / proporcional,
             paddingBottom: 4 / proporcional, marginBottom: 4 / proporcional}}>
            <img src={logo} style={{width: 192 / proporcional, height: 48 / proporcional}}  onClick={() => navigate ('/')}/>
        </div>
        
        <div className='' style={{height: 56 / proporcional, width: '100%', background: '#f9f9f9'}}>
            <div className='d-flex justify-content-between' style={{background: '#d18e32', width: '100%',
                    paddingRight: 20 / proporcional, paddingLeft: 20 / proporcional}}>
                <img src={icono_menu_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                    cursor: 'pointer', marginRight: 30 / proporcional}} onClick={() => setOpenMenu(!open_menu)}/>
                <div className='d-flex' style={{background: '#d18e32'}}>
                    <img src={icono_lupa_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                        cursor: 'pointer', marginRight: 30 / proporcional}}/>
                    <div className='position-relative' style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 14 / proporcional, 
                            marginBottom: 18 / proporcional, marginRight: 30 / proporcional}}>
                        <img src={menu === 'perfil' ? icono_perfil_black : icono_perfil_white} 
                                style={{width: 20 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenu('perfil')} onMouseLeave={() => setMenu('')}
                                onClick={() => ver_perfil()}/>
                        {
                            menu_perfil ? (
                                <div className='position-absolute '
                                    style={{width: 240 / proporcional, height: 'auto', background: 'transparent', top: 36 / proporcional, right: -20 / proporcional, zIndex: 99999}}>
                                    <img src={triangulo_menu} style={{width: 22 / proporcional, height: 19 / proporcional, marginLeft: 196 / proporcional}}/>
                                    <div className='shadow rounded'
                                    style={{width: 240 / proporcional, height: 'auto', padding: 20 / proporcional, background: 'white'}}>
                                        <div className='d-flex' style={{width: 200 / proporcional, height: 18 / proporcional, marginBottom: 10 / proporcional,
                                            cursor: 'pointer'}} onClick={() => {navigate ('/cuenta/perfil'); setMenuPerfil(false)}}>
                                            <img src={icono_cuenta_perfil} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                                fontWeight: 500}}>
                                            Mi perfil
                                            </p>
                                        </div>
                                        <div className='d-flex' style={{width: 200 / proporcional, height: 18 / proporcional, marginBottom: 10 / proporcional,
                                            cursor: 'pointer'}} onClick={() => {navigate ('/cuenta/favoritos'); setMenuPerfil(false)}}>
                                        <img src={icono_cuenta_favoritos} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                            fontWeight: 500}}>
                                            Mis favoritos
                                        </p>
                                        </div>
                                        <div className='d-flex' style={{width: 200 / proporcional, height: 18 / proporcional, marginBottom: 10 / proporcional,
                                            cursor: 'pointer'}} onClick={() => {navigate ('/cuenta/cotizaciones'); setMenuPerfil(false)}}>
                                            <img src={icono_cuenta_cotizaciones} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                                fontWeight: 500}}>
                                            Mis cotizaciones
                                            </p>
                                        </div>
                                        <div className='d-flex' style={{width: 200 / proporcional, height: 18 / proporcional, cursor: 'pointer'}} 
                                        onClick={() => cerrar_sesion()}>
                                            <img src={icono_cuenta_logout} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional}}/>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                                fontWeight: 500}}>
                                            Cerrar sesión
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                    {
                        authenticated ? (
                            <img src={icono_favoritos_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                                    cursor: 'pointer', marginRight: 30 / proporcional}}
                                onClick={() => navigate ('/cuenta/favoritos')}/>
                        ) : null
                    }
                    <div className='position-relative' style={{width: 49 / proporcional, height: 20 / proporcional, cursor: 'pointer',
                        marginTop: 18 / proporcional, marginBottom: 18 / proporcional, zIndex: 9999}} 
                        onClick={() => setOpenMenuCarrito(!open_menu_carrito)}>
                        <div className='d-flex' style={{height: 56 / proporcional}}>
                        <img src={icono_carrito_white} 
                                style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, 
                                            cursor: 'pointer', marginRight: 5 / proporcional}}/>
                        <div className='rounded-circle' style={{width: 24 / proporcional, height: 24 / proporcional, background: '#222931'}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', marginBottom: 0, fontWeight: 400,
                                textAlign: 'center'}}>
                                {cantidad_lista_cotizar}
                            </p>
                        </div>
                        </div>
                        {
                        open_menu_carrito && lista_carrito_cotizacion.length > 0 ? (
                          <div className='position-absolute '
                                style={{width: 260 / proporcional, height: 'auto', background: 'transparent', top: 36 / proporcional, right: 0 / proporcional}}>
                                <img src={triangulo_menu} style={{width: 22 / proporcional, height: 19 / proporcional, marginLeft: 216 / proporcional}}/>
                                <div className='shadow rounded'
                                    style={{width: 260 / proporcional, height: 'auto', padding: 20 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                        fontWeight: 500}}>
                                    Mi lista
                                    </p>
                                    <div className='overflow-auto'
                                        style={{width: 240 / proporcional, height: 300 / proporcional, marginBottom: 10 / proporcional}}>
                                    {
                                        lista_cotizar && lista_cotizar.length > 0 ? (
                                        lista_cotizar.map ((cotizar, index) => {
                                            return (
                                            <CardProductoCotizarCell cotizar={cotizar} proporcional={proporcional}/>
                                            )
                                        })
                                        ) : null
                                    }
                                    </div>
                                    <button className='btn' style={{width: 220 / proporcional, height: 40 / proporcional, fontSize: 14 / proporcional, 
                                        color: 'white', fontWeight: 500, background: 'rgb(225, 4, 4)'}}  onClick={() => navigate('/lista-cotizar')}>
                                    VER LISTA
                                    </button>
                                </div>
                            </div>
                        ) : null
                        }
                    </div>
                </div> 
            </div>
        </div>
        {
            open_menu  ? (
                <div className='position-absolute vh-100 shadow' style={{padding: 20 / proporcional, background: '#292929', top: 120 / proporcional, width: '100%', zIndex: 99999}}>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}
                    onClick={() => setOpenMenu(false)}>
                        <img src={icono_left} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 19 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Inicio
                        </p>  
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/sobre-nosotros'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Nosotros
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {setOpenSubMenu (true); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Proveedores
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/tienda'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Tienda
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/contacto'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Contácto
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                </div>
            ) : null
        }
        {
            open_sub_menu  ? (
                <div className='position-absolute shadow' 
                    style={{padding: 20 / proporcional, background: '#292929', top: 120 / proporcional, width: '100%', zIndex: 99999, height: 'auto'}}>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}>
                        <img src={icono_left} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 19 / proporcional}}
                        onClick={() => {setOpenSubMenu(false); setOpenMenu(true)}}/>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Aceros Arequipa
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('15'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Barras corrugadas
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            INKAFERRO
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('30'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Barras corrugadas ARCELORMITTAL
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            SIDERPERU
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('32'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Barras construcción
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}} >
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Metalyck
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('17'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Alambre recocido
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Aceros Arequipa
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('26'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Clavo de albañilería
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            TREAMPERÚ
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('29'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Clavo de albañilería
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Piramide
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('23'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Ladrillos
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Sagitario
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('31'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Ladrillos
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            INKA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('21'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Cemento
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            UNACEM
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('22'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Cemento
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            ETSAPERÚ
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('16'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Planchas de Tecnopor
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            MAJESTAD
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('19'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Sellador
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            NORTON
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('12'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Discos cortadores
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            BRIKER
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('13'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Discos cortadores
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            COMFISA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('24'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Guantes de protección
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            ASA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                            onClick={() => {ver_productos_proveedor('14'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Lijas de agua y de acero
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            TIGRE
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('25'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Tubos y conexiones
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
        }
      </div>
    )
}
