import React, { useEffect, useState } from 'react'

import icono_box from '../../assets/iconos/icono_box.png'
import icono_check_box from '../../assets/iconos/icono_check_box.png'

import { useDispatch, useSelector } from 'react-redux'
import {productosdata} from '../../redux/slice/productosdata.js'
import { productosConstants } from '../../uri/productos-constants.js'

export default function  Filtros({proporcional}) {

        const dispatch = useDispatch()
      
        const [filtros, setFiltros] = useState({})

        const [check_proveedor, setCheckProveedor] = useState ('')

        const {filtro_productos_search_order_amount} = useSelector(({filtros}) => filtros)

        useEffect (() => {
            const filtro = filtro_productos_search_order_amount.filtro
            const search = filtro_productos_search_order_amount.search
            const order_by = filtro_productos_search_order_amount.order_by
            const order = filtro_productos_search_order_amount.order
            const begin = filtro_productos_search_order_amount.begin
            const cantidad = filtro_productos_search_order_amount.cantidad
        }, [])

        useEffect(() => {
            setFiltros(filtro_productos_search_order_amount)
        }, [filtro_productos_search_order_amount])

        const filtrar_por_proveedor = (id_proveedor, proveedor) => {
                if (proveedor === check_proveedor){
                        setCheckProveedor('')
                }else{
                        setCheckProveedor(proveedor)
                }
                console.log ('id_proveedor', id_proveedor)
                const search = filtro_productos_search_order_amount.search
                const order_by = filtro_productos_search_order_amount.order_by
                const order = filtro_productos_search_order_amount.order
                const begin = filtro_productos_search_order_amount.begin
                const cantidad = filtro_productos_search_order_amount.cantidad
                if (proveedor !== check_proveedor){
                        dispatch (productosdata(productosConstants(0, search, id_proveedor, order_by, order, begin, cantidad, {}, false).get_productos_search_filtro_order_tienda))
                }else{
                        dispatch (productosdata(productosConstants(0, search, 0, order_by, order, begin, cantidad, {}, false).get_productos_search_filtro_order_tienda))
                }
        }

    return (
        <div style={{width: '100%', paddingTop: 10 / proporcional, paddingRight: 10 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${26 / proporcional}px`, color: '#007BA7'}}>Por proveedor</p>
            <div className='rounded' style={{width: '25%', height: 4 / proporcional, background: '#d18e32', marginTop: 17 / proporcional, marginBottom: 17 / proporcional}}/>
            <div style={{width: '100%', marginBottom: 33 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'arequipa' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('1', 'arequipa')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>BARRAS CORRUGADAS (ACEROS )</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'inkaferro' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('2', 'inkaferro')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>BARRAS CORRUGADAS (INKAFERRO)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'siderperu' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('3', 'siderperu')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>BARRAS CONSTRUCCIÓN (SIDERPERU)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'metalyck' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('4', 'metalyck')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>ALAMBRE RECOCIDO (METALYCK)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'clavos' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('5', 'clavos')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>CLAVO ALBAÑILERÍA (ACEROS AREQUIPA)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'tream' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('6', 'tream')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>CLAVO ALBAÑILERÍA (TREAMPERÚ)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'piramide' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('7', 'piramide')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>LADRILLOS (PIRAMIDE)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'sagitario' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('8', 'sagitario')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>LADRILLOS (SAGITARIO)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'inka' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('9', 'inka')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>CEMENTO (INKA)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'etsa' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('10', 'etsa')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>TECNOPOR (ETSAPERÚ)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'majestad' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('11', 'majestad')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>TEMPLE (MAJESTAD)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'norton' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('12', 'norton')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>DISCOS CORTADORES (NORTON)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'briker' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('13', 'briker')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>DISCOS CORTADORES (BRIKER)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'comfisa' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('14', 'comfisa')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>GUANTES DE PROTECCIÓN (COMFISA)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'asa' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('15', 'asa')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>LIJAS DE AGUA Y ACERO (ASA)</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={check_proveedor === 'tigre' ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => filtrar_por_proveedor('16', 'tigre')}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>TUBOS Y CONEXIONES (MATUSITA)</p>
                </div>
            </div>
            {/**<p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${26 / proporcional}px`, color: '#222931'}}>Por producto</p>
            <div className='rounded' style={{width: '25%', height: 4 / proporcional, background: '#d18e32', marginTop: 17 / proporcional, marginBottom: 17 / proporcional}}/>**/}
        </div>
    )
}