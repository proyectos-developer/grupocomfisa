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
import icono_lupa_black from'../assets/iconos/icono_lupa_black_96.png'
import icono_carrito_white from '../assets/iconos/icono_car_white_96.png'
import icono_perfil_white from '../assets/iconos/icono_perfil_white_96.png'

import icono_perfil_black from '../assets/iconos/icono_perfil_black_96.png'
import icono_left from '../assets/iconos/arrow_left_white_96.png'
import icono_right from '../assets/iconos/arrow_right_white_96.png'
import icono_dot_white from '../assets/iconos/icono_dot_white_96.png'
import icono_close_black from '../assets/iconos/icono_cross_black_96.png'

import icono_dot from '../assets/iconos/icono_menu_dot.png'

import icono_arrow_down from '../assets/iconos/icono_arrow_down.png'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CardProductoCotizarCell from './barra/productocotizarcell.jsx'
import {productosdata} from '../redux/slice/productosdata.js'
import { productosConstants } from '../uri/productos-constants.js'
import { set_authenticated, set_lista_carrito_cotizacion, set_lista_productos_buscar, set_productos_proveedor } from '../redux/actions/dataactions.js'
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
    
    const [menu_buscar, setMenuBuscar] = useState(false)
    const [buscar, setBuscar] = useState('')
    const [ebuscar, setEBuscar] = useState(false)

    const [cantidad_lista_cotizar, setCantidadLitaCotizar] = useState(0)
    const [lista_cotizar, setListaCotizar] = useState(0)

    const {lista_carrito_cotizacion, authenticated} = useSelector(({datareducer}) => datareducer)
    const {get_proveedor_detalles_productos, get_productos_search_filtro_order} = useSelector (({productos_data}) => productos_data)
    const {log_out} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
      if (get_productos_search_filtro_order && get_productos_search_filtro_order.success === true && get_productos_search_filtro_order.productos){
        dispatch(productosdata(productosConstants(0, 0, 0, 0, 0, 0, 0, {}, true).get_productos_search_filtro_order))
        dispatch (set_lista_productos_buscar({productos: get_productos_search_filtro_order.productos, buscar: buscar}))
        navigate (`/productos/${buscar.replace(' ', '-')}`)
        setBuscar('')
        setMenuBuscar(false)
      }
    }, [get_productos_search_filtro_order])

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

    const buscar_producto = () => {
      if (buscar === ''){
        setEBuscar(buscar === '' ? true : false)
      }else{
        setEBuscar(false)
        dispatch(productosdata(productosConstants(0, buscar, 0, 0, 0, 0, 16, {}, false).get_productos_search_filtro_order))
      }
    }

    return (
      <div className='' style={{height: 120 / proporcional, background: '#f9f9f9', paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
        <div className='d-flex justify-content-center' style={{height: 56 / proporcional, paddingTop: 4 / proporcional,
             paddingBottom: 4 / proporcional, marginBottom: 4 / proporcional}}>
            <img src={logo} style={{width: 192 / proporcional, height: 48 / proporcional}}  onClick={() => navigate ('/')}/>
        </div>
        
        <div className='' style={{height: 56 / proporcional, width: '100%', background: '#f9f9f9'}}>
            <div className='d-flex justify-content-between' style={{background: '#007BA7', width: '100%',
                    paddingRight: 20 / proporcional, paddingLeft: 20 / proporcional}}>
                <img src={icono_menu_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                    cursor: 'pointer', marginRight: 30 / proporcional}} onClick={() => setOpenMenu(!open_menu)}/>
                <div className='d-flex' style={{background: '#007BA7'}}>
                    <div className='position-relative' style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 14 / proporcional, 
                            marginBottom: 18 / proporcional, marginRight: 30 / proporcional}}>
                        <img className='position-absolute start-0' src={menu === 'lupa' ? icono_lupa_black : icono_lupa_white} 
                              style={{width: 20 / proporcional, height: 20 / proporcional, cursor: 'pointer', top: 3 / proporcional}}
                              onMouseOver={() => setMenu('lupa')} onMouseLeave={() => setMenu('')}
                              onClick={() => setMenuBuscar(!menu_buscar)}/>
                        {
                          menu_buscar ? ( 
                            <div className='position-absolute '
                              style={{width: 450 / proporcional, height: 'auto', background: 'transparent', top: 36 / proporcional, right: -125  / proporcional, zIndex: 999999}}>
                                <div className='d-flex shadow rounded'
                                  style={{width: 450 / proporcional, height: 70 / proporcional, padding: 10 / proporcional, background: 'white'}}>
                                    <div className='d-flex' style={{width: 400 / proporcional, height: 50 / proporcional, border: ebuscar ? '1px solid red' : '1px solid #bdbdbd', 
                                        borderRadius: 8 / proporcional, marginRight: 10 / proporcional}}>
                                        <input  
                                          type='default'
                                          className='form-control border-0'
                                          style={{width: '90%', height: 48 / proporcional, fontSize: 16 / proporcional, color: '#212121', borderBottomLeftRadius: 8 / proporcional, borderTopLeftRadius: 8 / proporcional}}
                                          value={buscar}
                                          onChange={(event) => setBuscar(event.target.value)}
                                          id='buscar'
                                          placeholder='Buscar'/>
                                          <div className='d-flex justify-content-center' style={{width: '10%', height: 48 / proporcional}}>
                                            <img src={icono_lupa_black} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 12 / proporcional,
                                              cursor: 'pointer'}} onClick={() => buscar_producto ()}/>
                                          </div>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: 20 / proporcional, height: 50 / proporcional}}>
                                      <img src={icono_close_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 16 / proporcional,
                                        cursor: 'pointer'}} onClick={() => {setMenuBuscar (false); setBuscar(''); setEBuscar(false)}}/>
                                    </div>
                                </div>
                            </div>
                          ): null
                        }
                    </div>
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
                <div className='position-absolute vh-100 shadow' style={{padding: 20 / proporcional, background: '#007BA7', top: 120 / proporcional, width: '100%', zIndex: 99999}}>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}
                    onClick={() => setOpenMenu(false)}>
                        <img src={icono_left} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 19 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Inicio
                        </p>  
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/sobre-nosotros'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Nosotros
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {setOpenSubMenu (true); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Proveedores
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/tienda'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Tienda
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/contacto'); setOpenMenu(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
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
                    style={{padding: 20 / proporcional, background: '#007BA7', top: 120 / proporcional, width: '100%', zIndex: 99999, height: 'auto'}}>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}>
                        <img src={icono_left} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 19 / proporcional}}
                        onClick={() => {setOpenSubMenu(false); setOpenMenu(true)}}/>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Aceros Arequipa
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('1'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Barras corrugadas
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            INKAFERRO
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('2'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Barras corrugadas ARCELORMITTAL
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            SIDERPERU
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('3'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Barras construcción
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}} >
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Metalyck
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('4'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Alambre recocido
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Aceros Arequipa
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('5'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Clavo de albañilería
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            TREAMPERÚ
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('6'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Clavo de albañilería
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Piramide
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('7'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Ladrillos
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            Sagitario
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('8'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Ladrillos
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            INKA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('9'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Cemento
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            ETSAPERÚ
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('10'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Planchas de Tecnopor
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            MAJESTAD
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('11'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Sellador
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            NORTON
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('12'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Discos cortadores
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            BRIKER
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('13'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Discos cortadores
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            COMFISA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('14'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Guantes de protección
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            ASA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                            onClick={() => {ver_productos_proveedor('15'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                                Lijas de agua y de acero
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
                            TIGRE
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {ver_productos_proveedor('16'); setOpenSubMenu(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#007BA7'}}>
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
