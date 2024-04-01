import React, { useEffect, useState } from 'react'

import logo from '../assets/logo_texto_48.png'
import icono_cell from '../assets/iconos/icono_cell.png'
import icono_clock from '../assets/iconos/icono_clock.png'
import icono_cuenta_perfil from '../assets/iconos/menu_cuenta_perfil.png'
import icono_cuenta_favoritos from '../assets/iconos/menu_cuenta_favoritos.png'
import icono_cuenta_cotizaciones from '../assets/iconos/menu_cuenta_cotizaciones.png'
import icono_cuenta_logout from '../assets/iconos/menu_cuenta_logout.png'
import triangulo_menu from '../assets/iconos/triangulo_menu.png'

import icono_favoritos_white from '../assets/iconos/icono_favoritos_white_96.png'
import icono_lupa_white from '../assets/iconos/icono_lupa_white_96.png'
import icono_carrito_white from '../assets/iconos/icono_car_white_96.png'
import icono_perfil_white from '../assets/iconos/icono_perfil_white_96.png'

import icono_favoritos_black from '../assets/iconos/icono_favoritos_black_96.png'
import icono_lupa_black from '../assets/iconos/icono_lupa_black_96.png'
import icono_carrito_black from '../assets/iconos/icono_car_black_96.png'
import icono_perfil_black from '../assets/iconos/icono_perfil_black_96.png'

import icono_dot from '../assets/iconos/icono_menu_dot.png'

import icono_arrow_down from '../assets/iconos/icono_arrow_down.png'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CardProductoCotizar from './barra/productocotizar.jsx'
import {productosdata} from '../redux/slice/productosdata.js'
import { productosConstants } from '../uri/productos-constants.js'
import { set_authenticated, set_lista_carrito_cotizacion, set_productos_proveedor } from '../redux/actions/dataactions.js'
import {begindata} from '../redux/slice/begindata.js'
import { beginConstants } from '../uri/begin-constants.js'

export default function BarraMenu({proporcional}) {

    const navigate = useNavigate ()
    const location = useLocation()
    const dispatch = useDispatch()

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
                    location.pathname.split ('/')[1] === 'proveedor' ? 'proveedor' : 
                    location.pathname.split ('/')[1] === 'cuenta' ? 'cuenta' : 'inicio')
    }, [location.pathname])

    useEffect (() => {
      if (get_proveedor_detalles_productos && get_proveedor_detalles_productos.success === true && get_proveedor_detalles_productos.productos &&
          get_proveedor_detalles_productos.total_productos && get_proveedor_detalles_productos.proveedor){
            console.log (get_proveedor_detalles_productos)
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
      <div className='' style={{height: 120 / proporcional, paddingLeft: 350 / proporcional,  paddingRight: 350 / proporcional,
                                                 background: '#f9f9f9', paddingTop: 4 / proporcional, paddingBottom: 6 / proporcional}}>
        <div className='d-flex justify-content-between' style={{height: 56 / proporcional, borderBottom: '2px solid #fafafa'}}>
            <div className='' style={{width: '25%', height: 56 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional}}>
                <img src={logo} style={{width: 192 / proporcional, height: 48 / proporcional}} onClick={() => navigate ('/pedido/cotizacion/admin/a0f478c8-956d-4a1f-b61e-453ded95afba')}/>
            </div>
            <div className='d-flex justify-content-end' style={{width: '75%', height: 48 / proporcional, paddingTop: 2 / proporcional,
                paddingBottom: 2 / proporcional}}>
                <div className='d-flex'>
                  <div className='d-flex' style={{paddingRight: 25 / proporcional}}>
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
            </div>
        </div>
        
        <div className='position-relative' 
          style={{height: 56 / proporcional, zIndex: 99999, width: '100%', paddingRight: 350 / proporcional, paddingLeft: 350 / proporcional, background: '#f9f9f9'}}>
            <div className='d-flex justify-content-between position-absolute top-0 start-0 rounded' style={{background: '#007BA7', width: 1222 / proporcional}}>
                <div className='d-flex' style={{paddingLeft: 25 / proporcional, background: '#007BA7'}}>
                    <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'inicio' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'inicio' ? '#8B4513' : '#007BA7'}} 
                        onMouseOver={() => setMenu ('inicio')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/')}>
                    Inicio
                    </p>  
                    <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'nosotros' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'nosotros' ? '#8B4513' : '#007BA7'}} 
                        onMouseOver={() => setMenu ('nosotros')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/sobre-nosotros')}>
                    Nosotros
                    </p>  
                    <div className='position-relative' style={{width: 140 / proporcional, height: 56 / proporcional}}
                              onMouseOver={() => setMenu ('proveedor')} onMouseLeave={() => setMenu('')}>
                        <div className='d-flex' style={{width: 140 / proporcional, height: 56 / proporcional}}>
                          <p style={{width: 121 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'proveedor' ? 700 : 600, 
                              marginBottom: 0,
                              color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'proveedor' ? '#8B4513' : '#007BA7'}}>
                            Proveedores
                          </p>  
                          <img src={icono_arrow_down} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 21 / proporcional, 
                              marginBottom: 21 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                        </div> 
                        {
                          menu === 'proveedor' ? (
                            <div className='position-absolute shadow rounded' 
                                style={{width: 800 / proporcional, height: 'auto', padding: 15 / proporcional, background: 'white'}}>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        Acreos Arequipa
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('15'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 200, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Barras corrugadas
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        INKAFERRO
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('30'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 200, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Barras corrugadas ARCELORMITTAL
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        SIDERPERU
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('32'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 200, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Barras construcción
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        Metalyck
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('17'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Alambre recocido
                                          </p>
                                      </div>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <div style={{width: '100%', height: 20 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                            marginBottom: 0, color: '#22222'}}>
                                          Aceros Arequipa
                                        </p>
                                      </div>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('26'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Clavo de albañilería
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <div style={{width: '100%', height: 20 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                            marginBottom: 0, color: '#22222'}}>
                                          TREAMPERÚ
                                        </p>
                                      </div>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('29'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Clavo de albañilería
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        Piramide
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('23'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Ladrillos
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        SAGITARIO
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('31'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Ladrillos
                                          </p>
                                      </div>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        Inka
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('21'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Cemento
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        ETSAPERÚ
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('16'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Planchas de Tecnopor
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        MAJESTAD
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('19'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Sellador
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        NORTON
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('12'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Discos cortadores
                                          </p>
                                      </div>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        BRIKER
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('13'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Discos cortadores
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        COMFISA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('24'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Guantes de protección
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        ASA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('14'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Lijas de agua y de acero
                                          </p>
                                      </div>
                                    </div>
                                  <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        TIGRE
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => {ver_productos_proveedor('25'); setMenu('proveedor')}}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Tubos y conexiones
                                          </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          ) : null
                        }
                    </div> 
                    <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'tienda' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'tienda' ? '#8B4513' : '#007BA7'}} 
                        onMouseOver={() => setMenu ('tienda')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/tienda')}>
                    Tienda
                    </p>  
                    <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'contacto' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'contacto' ? '#8B4513' : '#007BA7'}} 
                        onMouseOver={() => setMenu ('contacto')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/contacto')}>
                    Contácto
                    </p>  
                </div> 
                <div className='d-flex' style={{paddingRight: 25 / proporcional, background: '#007BA7'}}>
                    <img src={menu === 'lupa' ? icono_lupa_black : icono_lupa_white} 
                        style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                        cursor: 'pointer', marginRight: 30 / proporcional}}
                        onMouseOver={() => setMenu('lupa')} onMouseLeave={() => setMenu('')}/>
                    <div className='position-relative' style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 14 / proporcional, 
                            marginBottom: 18 / proporcional, marginRight: 30 / proporcional}}>
                        <img className='position-absolute start-0' src={menu === 'perfil' ? icono_perfil_black : icono_perfil_white} 
                              style={{width: 20 / proporcional, height: 20 / proporcional, cursor: 'pointer', top: 3 / proporcional}}
                              onMouseOver={() => setMenu('perfil')} onMouseLeave={() => setMenu('')}
                              onClick={() => ver_perfil()}/>
                        {
                          menu_perfil ? (
                            <div className='position-absolute '
                              style={{width: 240 / proporcional, height: 'auto', background: 'transparent', top: 36 / proporcional, right: -20 / proporcional}}>
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
                        <img src={menu === 'favoritos' ? icono_favoritos_black : icono_favoritos_white} 
                            style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                                cursor: 'pointer', marginRight: 30 / proporcional}}
                            onMouseOver={() => setMenu('favoritos')} onMouseLeave={() => setMenu('')} onClick={() =>{ navigate ('/cuenta/favoritos')}}/>
                      ) : null
                    }
                    <div className='position-relative' style={{width: 49 / proporcional, height: 24 / proporcional, cursor: 'pointer',
                        marginTop: 14 / proporcional, marginBottom: 18 / proporcional}} 
                        onMouseOver={() => setMenu('carrito')} onMouseLeave={() => setMenu('')} 
                        onClick={lista_carrito_cotizacion.length > 0 ? () => navigate('/lista-cotizar') : null}>
                      <div className='d-flex' style={{height: 56 / proporcional}}>
                        <img src={menu === 'carrito' ? icono_carrito_black : icono_carrito_white} 
                              style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, 
                                            cursor: 'pointer', marginRight: 5 / proporcional}}/>
                        {
                          lista_carrito_cotizacion.length > 0 ? (
                            <div className='rounded-circle' style={{width: 24 / proporcional, height: 24 / proporcional, background: '#222931'}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', marginBottom: 0, fontWeight: 400,
                                  textAlign: 'center'}}>
                                  {cantidad_lista_cotizar}
                                </p>
                            </div>
                          ) : null
                        }
                      </div>
                      {
                        menu === 'carrito' && lista_carrito_cotizacion.length > 0 ? (
                          <div className='position-absolute '
                            style={{width: 260 / proporcional, height: 'auto', background: 'transparent', top: 36 / proporcional, right: -20 / proporcional}}>
                              <img src={triangulo_menu} style={{width: 22 / proporcional, height: 19 / proporcional, marginLeft: 194 / proporcional}}/>
                              <div className='shadow rounded'
                                style={{width: 260 / proporcional, height: 'auto', padding: 20 / proporcional, background: 'white'}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                    fontWeight: 500}}>
                                  Mi lista
                                </p>
                                <div className='overflow-auto'
                                  style={{width: 220 / proporcional, height: 300 / proporcional}}>
                                  {
                                    lista_cotizar && lista_cotizar.length > 0 ? (
                                      lista_cotizar.map ((cotizar, index) => {
                                        return (
                                          <CardProductoCotizar cotizar={cotizar} proporcional={proporcional}/>
                                        )
                                      })
                                    ) : null
                                  }
                                </div>
                                <button className='btn' style={{width: 220 / proporcional, height: 20 / proporcional, fontSize: 14 / proporcional, 
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
      </div>
    )
}
