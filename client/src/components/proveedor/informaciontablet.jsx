import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactImageZoom from 'react-image-zoom'

import icono_car_white from '../../assets/iconos/icono_car_black_96.png'
import icono_car_black from '../../assets/iconos/icono_car_white_96.png'
import icono_favoritos_white from '../../assets/iconos/icono_favoritos_black_96.png'
import icono_favoritos_black from '../../assets/iconos/icono_favoritos_white_96.png'
 
import { set_lista_carrito_cotizacion, set_open_menu_carrito, set_open_warning_login, set_productos_proveedor } from '../../redux/actions/dataactions';
import { useLocation } from 'react-router-dom';
import {carritodata} from '../../redux/slice/carritodata'
import {carritoConstants} from '../../uri/carrito-constants'
import {favoritosdata} from '../../redux/slice/favoritosdata'
import {favoritosConstants} from '../../uri/favoritos-constants'

import {v4 as uuidv4} from 'uuid'
import {proveedoresdata} from '../../redux/slice/proveedoresdata';
import { proveedoresConstants } from '../../uri/proveedores-constatns';
import {productosdata} from '../../redux/slice/productosdata';
import { productosConstants } from '../../uri/productos-constants';

export default function InformacionProveedor({proporcional}) {

    const location = useLocation ()
    const dispatch = useDispatch()

    const [proveedor, setProveedor] = useState({})
    const [producto, setProducto] = useState ({})
    const [lista_productos, setListaProductos] = useState([])
    const [lista_tipo_productos, setListaTipoProductos] = useState([])
    const [lista_medidas_producto, setListaMedidasProducto] = useState([])

    const [foto_principal, setFotoPrincipal] = useState('')
    const [foto_uno, setFotoUno] = useState('')
    const [foto_dos, setFotoDos] = useState('')
    const [foto_tres, setFotoTres] = useState('')
    const [foto_cuatro, setFotoCuatro] = useState('')
    const [foto_cinco, setFotoCinco] = useState('')
    const [foto_seis, setFotoSeis] = useState('')
    const [foto_siete, setFotoSiete] = useState('')
    const [foto_ocho, setFotoOcho] = useState('')

    const [cantidad, setCantidad] = useState (1)

    const [boton_lista, setBotonLista] = useState(false)
    const [boton_favoritos, setBotonFavoritos] = useState(false)

    const {productos_proveedor, authenticated} = useSelector(({datareducer}) => datareducer)
    const {get_tipo_productos_proveedor, get_medidas_producto} = useSelector (({proveedores_data}) => proveedores_data)
    const {get_productos_medida} = useSelector (({productos_data}) => productos_data)
    const {new_cotizar} = useSelector (({carrito_data}) => carrito_data)

    const [menu_medidas, setMenuMedidas] = useState ('')
    const [medida_seleccionada, setMedidaSeleccionada] = useState ('')
    const [lista_fotos_productos, setListaFotosProductos] = useState([])

    const [indice_fotos, setIndiceFotos] = useState (0)
    const [indice_foto_uno, setIndiceFotoUno] = useState (1)
    const [indice_foto_dos, setIndiceFotoDos] = useState (2)
    const [indice_foto_tres, setIndiceFotoTres] = useState (3)
    const [indice_foto_cuatro, setIndiceFotoCuatro] = useState (4)
    const [indice_foto_cinco, setIndiceFotocinco] = useState (5)
    const [indice_foto_seis, setIndiceFotoSeis] = useState (6)
    const [indice_foto_siete, setIndiceFotoSiete] = useState (7)
    const [indice_foto_ocho, setIndiceFotoOcho] = useState (8)

    useEffect(() => {
        if (productos_proveedor && productos_proveedor.proveedor && productos_proveedor.productos){
            console.log (productos_proveedor)
            setProveedor(productos_proveedor.proveedor)
            setListaProductos(productos_proveedor.productos)
            setListaFotosProductos([])
            setListaTipoProductos([])
            setListaMedidasProducto([])
            setIndiceFotos(0)
            setIndiceFotoUno(0)
            setIndiceFotoDos(1)
            setIndiceFotoTres(2)
            setIndiceFotoCuatro(3)
            setFotoUno('')
            setFotoDos('')
            setFotoTres('')
            setFotoCuatro('')
            setFotoCinco('')
            setFotoSeis('')
            setFotoSiete('')
            setFotoOcho('')
            dispatch(proveedoresdata(proveedoresConstants(productos_proveedor.proveedor.id, 0, 0, 0, 0, 0, 0, {}, false).get_tipo_productos_proveedor))
        }
    }, [productos_proveedor])

    useEffect(() => {
        if (get_tipo_productos_proveedor && get_tipo_productos_proveedor.success === true && get_tipo_productos_proveedor.tipo_productos){
            setListaTipoProductos(get_tipo_productos_proveedor.tipo_productos)
            dispatch (proveedoresdata(proveedoresConstants(0, 0, 0, 0, 0, {}, true).get_tipo_productos_proveedor))
            dispatch (proveedoresdata(proveedoresConstants(get_tipo_productos_proveedor.tipo_productos[0].id, 0, 0, 0, {}, false).get_medidas_producto))
        }
    }, [get_tipo_productos_proveedor])

    useEffect (() => {
        if (get_medidas_producto && get_medidas_producto.success === true && get_medidas_producto.medidas){
            setListaMedidasProducto (get_medidas_producto.medidas)
            dispatch (proveedoresdata(proveedoresConstants(0, 0, 0, 0, 0, {}, true).get_medidas_producto))
            dispatch(set_productos_proveedor({}))
            setMedidaSeleccionada(get_medidas_producto.medidas [0].id)
            dispatch (productosdata(productosConstants(get_medidas_producto.medidas[0].id, 0, 0, 0, 0, 0, 0, {}, false).get_productos_medida))
        }
    }, [get_medidas_producto])

    useEffect(() => {
        if (get_productos_medida && get_productos_medida.success === true && get_productos_medida.producto){
            setProducto(get_productos_medida.producto)
            setFotoPrincipal(get_productos_medida.producto.foto_uno)
            dispatch (productosdata(productosConstants(0, 0, 0, 0, 0, 0, 0, {}, true).get_productos_medida))
            obtener_fotos_productos()
        }
    }, [get_productos_medida])

    const obtener_fotos_productos = () => {
        let lista_fotos = []
        lista_productos.map ((producto, index) => {
            producto.foto_uno !== '' ? (
                lista_fotos.push ({foto: producto.foto_uno, nombre: producto.producto})
            ) : producto.foto_dos !== '' ? (
                lista_fotos.push ({foto: producto.foto_dos, nombre: producto.producto})
            ) : producto.foto_tres !== '' ? (
                lista_fotos.push ({foto: producto.foto_tres, nombre: producto.producto})
            ): producto.foto_cuatro !== '' ? (
                lista_fotos.push ({foto: producto.foto_cuatro, nombre: producto.producto})
            ): producto.foto_cinco !== '' ? (
                lista_fotos.push ({foto: producto.foto_cinco, nombre: producto.producto})
            ) : producto.foto_seis !== '' ? (
                lista_fotos.push ({foto: producto.foto_seis, nombre: producto.producto})
            ) : producto.foto_siete !== '' ? (
                lista_fotos.push ({foto: producto.foto_siete, nombre: producto.producto})
            ) : producto.foto_ocho !== '' ? (
                lista_fotos.push ({foto: producto.foto_ocho, nombre: producto.producto})
            ): (
                null
            )
        })
        if (lista_fotos[0]){
            setFotoUno(lista_fotos[0].foto)
            if (lista_fotos[1]){
                setFotoDos(lista_fotos[1].foto)
                if (lista_fotos[2]){
                    setFotoTres(lista_fotos[2].foto)
                    if (lista_fotos[3]){
                        setFotoCuatro(lista_fotos[3].foto)
                        if (lista_fotos[4]){
                            setFotoCinco(lista_fotos[4].foto)
                            if (lista_fotos[5]){
                                setFotoSeis(lista_fotos[5].foto)
                                if (lista_fotos[6]){
                                    setFotoSiete(lista_fotos[6].foto)
                                    if (lista_fotos[7]){
                                        setFotoOcho(lista_fotos[7].foto)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        setListaFotosProductos(lista_fotos)
    }

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
        window.scrollTo(0, 0)
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
      window.scrollTo(0, 0)
    }
    
    return (
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 28 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: '#222931'}}>
                    {proveedor.proveedor}
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 18 / proporcional, fontWeight: 400, color: 'rgba(95, 101, 109, 0.6'}}>
                    {proveedor.descripcion}
                </p>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 30 / proporcional}}>
                        {
                            lista_tipo_productos && lista_tipo_productos.length > 0 ? (
                                lista_tipo_productos.map ((tipo, index) => {
                                    return (
                                        <div style={{width: `50%`, height: 30 / proporcional, cursor: 'pointer'}}>
                                            <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'rgb(56, 77, 167)'}}>
                                                {tipo.nombre_tipo}
                                            </p>
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </div>
                        {
                            lista_medidas_producto && lista_medidas_producto.length > 0 ? (
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                                    {
                                        lista_medidas_producto.map ((medida, index) => {
                                            return (
                                                index < 4 ? ( 
                                                    <div className='d-flex justify-content-center' style={{width: `25%`, height: 40 / proporcional, cursor: 'pointer',
                                                        background: menu_medidas === medida.id || medida_seleccionada === medida.id ? 'rgb(57, 77, 167)' : '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                                                        borderTopRightRadius: 8 / proporcional}}
                                                        onMouseOver={() => setMenuMedidas(medida.id)} onMouseLeave={() => setMenuMedidas('')}
                                                        onClick={() => {setMedidaSeleccionada(medida.id); dispatch(productosdata(productosConstants(medida.id, 0, 0, 0, 0, 0, 0, {}, false).get_productos_medida))}}>
                                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, 
                                                            color: menu_medidas === medida.id || medida_seleccionada === medida.id ? 'white' : 'rgb(56, 77, 167)',
                                                            textAlign: 'center'}}>
                                                            {medida.nombre_medida}
                                                        </p>
                                                    </div>
                                                ) : null
                                            )
                                        })
                                    }
                                </div>
                            ) : null
                        } 
                        { 
                            lista_medidas_producto && lista_medidas_producto.length > 0 ? (
                                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        {
                                            lista_medidas_producto.map ((medida, index) => {
                                                return (
                                                    index > 3 && index < 8 ? (
                                                        <div className='d-flex justify-content-center' style={{width: `25%`, height: 40 / proporcional, cursor: 'pointer',
                                                            background: menu_medidas === medida.id || medida_seleccionada === medida.id ? 'rgb(57, 77, 167)' : '#bdbdbd', borderTopLeftRadius: 8 / proporcional, 
                                                            borderTopRightRadius: 8 / proporcional}}
                                                            onMouseOver={() => setMenuMedidas(medida.id)} onMouseLeave={() => setMenuMedidas('')}
                                                            onClick={() => {setMedidaSeleccionada(medida.id); dispatch(productosdata(productosConstants(medida.id, 0, 0, 0, 0, 0, 0, {}, false).get_productos_medida))}}>
                                                            <p style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, 
                                                                color: menu_medidas === medida.id || medida_seleccionada === medida.id ? 'white' : 'rgb(56, 77, 167)',
                                                                textAlign: 'center'}}>
                                                                {medida.nombre_medida}
                                                            </p>
                                                        </div>
                                                    ) : null
                                                )
                                            })
                                        }
                                    </div>
                            ) : null
                        }
                </div>
                {
                    producto ? (
                        <div className='' style={{width: '100%', minHeight: 60 / proporcional, padding: 10 / proporcional, height: 'auto'}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 400, color: '#222931'}}>
                                Producto: <span style={{fontSize: 20 / proporcional, fontWeight: 600}}> {producto.producto}</span>
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 400, color: '#222931'}}>
                                Descripción: <span style={{fontSize: 20 / proporcional, fontWeight: 600}}> {producto.descripcion}</span>
                            </p>
                            {
                                producto.caracteristica_uno !== '' ? (
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 400, color: '#222931'}}>
                                            Características:
                                        </p>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#222931'}}>
                                            1. {producto.caracteristica_uno}
                                        </p>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#222931'}}>
                                            2. {producto.caracteristica_dos}
                                        </p>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#222931'}}>
                                            3. {producto.caracteristica_tres}
                                        </p>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#222931'}}>
                                            4. {producto.caracteristica_cuatro}
                                        </p>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 600, color: '#222931'}}>
                                            5. {producto.caracteristica_cinco}
                                        </p>
                                    </div>
                                ) : null
                            }
                        </div>
                    ) : null
                }
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                {
                    foto_principal && foto_principal !== '' ? (
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 427 / proporcional, border: '1px solid #bdbdbd', marginBottom: 20 / proporcional}}>
                            <ReactImageZoom {...{ width: 427 / proporcional, height: 427 / proporcional, img: foto_principal, zoomPosition: 'original', zoomWidth: 500, zoomLensStyle: 'default',
                            zoomStyle: 'default', offset: 'default'}}/>
                        </div>
                    ) : (
                        <div style={{width: 427 / proporcional, height: 427 / proporcional, border: '1px solid #bdbdbd', marginBottom: 20 / proporcional}}/>
                    )
                }
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div className='' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_uno)}>
                                {
                                    foto_uno === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_uno} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_dos)}>
                                {
                                    foto_dos === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_dos} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_tres)}>
                                {
                                    foto_tres === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_tres} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_cuatro)}>
                                {
                                    foto_cuatro === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_cuatro} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_uno)}>
                                {
                                    foto_cinco === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_cinco} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_dos)}>
                                {
                                    foto_seis === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_seis} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_tres)}>
                                {
                                    foto_siete === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_siete} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                            <div style={{width: '24%', height: 150 / proporcional, cursor: 'pointer'}} onClick={() => setFotoPrincipal(foto_cuatro)}>
                                {
                                    foto_ocho === '' ? (
                                        <div style={{width: '100%', height: '100%'}}/>
                                    ): (
                                        <img src={foto_ocho} style={{width: '100%', height: '100%'}}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', border: '1px solid #f0f0f0', marginBottom: 20 / proporcional}}/>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400, color: '#222931'}}>
                        Pide tu cotización (Producto <span style={{fontWeight: 600}}>{producto.producto}</span>)
                    </p>
                    <div style={{width: '100%'}} className='d-flex'>
                        <input 
                            type='number'
                            className='form-control'
                            value={cantidad}
                            onChange={(event) => setCantidad(event.target.value)}
                            placeholder='1'
                            style={{fontSize: 16 / proporcional, width: 75 / proporcional, height: 50 / proporcional, padding: 10 / proporcional, background: '#f8f9f9', 
                                    color: '#848a90', marginRight: 20 / proporcional}}/>
                        <div className='btn rounded d-flex justify-content-center' 
                            onClick={() => agregar_lista_cotizar()}
                            style={{width: 200 / proporcional, height: 50 / proporcional, background: boton_lista ? 'white' : 'rgb(209, 142, 50)', paddingTop: 18 / proporcional, 
                                    paddingBottom: 18 / proporcional, border: '1px solid rgb(209, 142, 50)', marginRight: 20 / proporcional}}
                                    onMouseOver={() => setBotonLista(true)} onMouseLeave={() => setBotonLista(false)}>
                                <img src={!boton_lista ? icono_car_black : icono_car_white} style={{width: 14 / proporcional, height: 14 / proporcional, marginRight: 7 / proporcional}}/>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 700, color: boton_lista ? 'rgb(209, 142, 50)' : 'white', lineHeight: `${16 / proporcional}px`}}>
                                Agregar a lista
                                </p>
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
            </div>
        </div>
    )
}