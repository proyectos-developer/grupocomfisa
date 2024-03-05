import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icono_car_white from '../../assets/iconos/icono_car_black_96.png'
import icono_car_black from '../../assets/iconos/icono_car_white_96.png'
import icono_favoritos_white from '../../assets/iconos/icono_favoritos_black_96.png'
import icono_favoritos_black from '../../assets/iconos/icono_favoritos_white_96.png'
 
import { set_lista_carrito_cotizacion, set_open_menu_carrito, set_open_warning_login } from '../../redux/actions/dataactions';
import { useLocation } from 'react-router-dom';
import {carritodata} from '../../redux/slice/carritodata'
import {carritoConstants} from '../../uri/carrito-constants'
import {favoritosdata} from '../../redux/slice/favoritosdata'
import {favoritosConstants} from '../../uri/favoritos-constants'

import {v4 as uuidv4} from 'uuid'

export default function InformacionProducto({proporcional}) {

  const location = useLocation ()
  const dispatch = useDispatch()
  const [cantidad, setCantidad] = useState (1)
  
  const [producto, setProducto] = useState({})

  const [boton_lista, setBotonLista] = useState(false)
  const [boton_favoritos, setBotonFavoritos] = useState(false)

  const {producto_data, authenticated} = useSelector(({datareducer}) => datareducer)
  const {new_cotizar} = useSelector (({carrito_data}) => carrito_data)
  
  useEffect (() => {
    setProducto(producto_data)
  }, [])
  
  useEffect (() => {
    setProducto(producto_data)
  }, [producto_data])

  useEffect (() => {
      if (new_cotizar && new_cotizar.success === true && new_cotizar.cotizar){
          dispatch (carritodata (carritoConstants(0, 0, {}, true).new_cotizar))
          dispatch (set_lista_carrito_cotizacion(new_cotizar.cotizar))
          dispatch(set_open_menu_carrito(true))
          window.scrollTo(0, 0)
      }
  }, [new_cotizar])

  const agregar_lista_cotizar = () => {
      const shop_id = window.localStorage.getItem ('shop_id')
      if (shop_id){
          const new_lista = {
              id_producto: producto.id,
              usuario: authenticated ? window.localStorage.getItem ('usuario') : '',
              shop_id: shop_id,
              comentarios: '',
              cantidad: 1,
              precio: 0
          }
          dispatch (carritodata (carritoConstants(0, 0, new_lista, false).new_cotizar))
      }else{
          const shopid = uuidv4()
          const new_lista = {
              id_producto: producto.id,
              usuario: authenticated ? window.localStorage.getItem ('usuario') : '',
              shop_id: shopid,
              comentarios: '',
              cantidad: 1,
              precio: 0
          }
          window.localStorage.setItem ('shop_id', shopid)
          dispatch (carritodata (carritoConstants(0, 0, new_lista, false).new_cotizar))
      }
  }

  const agregar_favoritos = () => {
    if (!authenticated){
        dispatch(set_open_warning_login({open: true, warning: 'favoritos'}))
    }else{
        const favorito_data = {
            id_producto: producto.id,
            usuario: window.localStorage.getItem ('usuario')
        }
        dispatch (favoritosdata(favoritosConstants(favorito_data, false, 0, 0).new_favorito))
    }
  }

  return (
    <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
          {
            producto && producto.producto ? (
              <div className='d-flex' style={{width: '100%', height: 580 / proporcional}}>
                <img src={producto.foto_uno} style={{width: 580 / proporcional, height: 580 / proporcional, marginRight: 10 / proporcional}}/>
                <div style={{width: 630 / proporcional, height: 580 / proporcional, paddingLeft: 19 / proporcional}}>
                  <p style={{fontSize: 28 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: '#222931'}}>
                    {producto.producto} ({producto.proveedor.toUpperCase()})
                  </p>
                  <p style={{fontSize: 24 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 18 / proporcional, fontWeight: 400, color: 'rgba(95, 101, 109, 0.6'}}>
                    {producto.descripcion}
                  </p>
                  {
                    producto.caracteristica_uno !== '' ? (
                      <div style={{width: 630 / proporcional, height: 'auto'}}>
                              <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 500, color: '#212121'}}>
                                Características:
                              </p>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#212121'}}>
                                  * {producto.caracteristica_uno}
                              </p>
                              {
                                producto.caracteristica_dos !== '' ? (
                                  <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#212121'}}>
                                    * {producto.caracteristica_dos}
                                  </p>
                                ) : null
                              }
                              {
                                producto.caracteristica_tres !== '' ? (
                                  <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#212121'}}>
                                    * {producto.caracteristica_tres}
                                  </p>
                                ) : null
                              }
                              {
                                producto.caracteristica_cuatro !== '' ? (
                                  <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#212121'}}>
                                    * {producto.caracteristica_cuatro}
                                  </p>
                                ) : null
                              }
                              {
                                producto.caracteristica_cinco !== '' ? (
                                  <p style={{fontSize: 20 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#212121'}}>
                                    * {producto.caracteristica_cinco}
                                  </p>
                                ) : null
                              }
                      </div>
                    ) : null
                  }
                  <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 400, color: '#222931'}}>
                    Pide tu cotización
                  </p>
                  <div style={{width: '100%', marginBottom: 10 / proporcional}} className='d-flex'>
                    <input 
                      type='number'
                      className='form-control'
                      value={cantidad}
                      onChange={(event) => setCantidad(event.target.value)}
                      placeholder='1'
                      style={{fontSize: 16 / proporcional, width: 50 / proporcional, height: 50 / proporcional, padding: 10 / proporcional, background: '#f8f9f9', 
                              color: '#848a90', marginRight: 10 / proporcional}}/>
                    <div className='btn rounded d-flex justify-content-center' 
                        onClick={() => agregar_lista_cotizar()}
                        style={{width: 175 / proporcional, height: 50 / proporcional, background: boton_lista ? 'white' : 'rgb(209, 142, 50)', paddingTop: 18 / proporcional, 
                              paddingBottom: 18 / proporcional, border: '1px solid rgb(209, 142, 50)'}}
                              onMouseOver={() => setBotonLista(true)} onMouseLeave={() => setBotonLista(false)}>
                          <img src={!boton_lista ? icono_car_black : icono_car_white} style={{width: 14 / proporcional, height: 14 / proporcional, marginRight: 7 / proporcional}}/>
                          <p style={{fontSize: 14 / proporcional, fontWeight: 700, color: boton_lista ? 'rgb(209, 142, 50)' : 'white', lineHeight: `${16 / proporcional}px`}}>
                            Agregar a lista
                          </p>
                    </div>
                  </div>
                  <div className='btn rounded d-flex justify-content-center' 
                      onClick={() => agregar_favoritos()}
                      style={{width: 235 / proporcional, height: 50 / proporcional, background: boton_favoritos ? 'white' : 'rgb(56, 77, 167)', paddingTop: 18 / proporcional, 
                            paddingBottom: 18 / proporcional, border: '1px solid rgb(56, 77, 167111111111)'}}
                            onMouseOver={() => setBotonFavoritos(true)} onMouseLeave={() => setBotonFavoritos(false)}>
                        <img src={!boton_favoritos ? icono_favoritos_black : icono_favoritos_white} style={{width: 14 / proporcional, height: 14 / proporcional, marginRight: 7 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 700, color: boton_favoritos ? 'rgb(209, 142, 50)' : 'white', lineHeight: `${16 / proporcional}px`}}>
                          Agregar a favoritos
                        </p>
                  </div>
                </div>
              </div>
            ) : null
          }
    </div>
  )
}
