import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import TituloPaginaTablet from './tituloprincipaltablet.jsx'
import InformacionProductoTablet from './informacionproductotablet.jsx'
import ProductosRelacionadosTablet from './productosrelacionadostablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
import ModalCargando from '../modal/cargando.jsx'
import { useDispatch, useSelector } from 'react-redux'

import icono_warning from '../../assets/iconos/icono_warning_black_96.png'
import { set_open_warning_login } from '../../redux/actions/dataactions.js'

export default function DetallesProductoTablet({proporcional}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const [boton_iniciar, setBotonIniciar] = useState (false)
  const [boton_cancelar, setBotonCancelar] = useState (false)

  const productos_data = useSelector(({productos_data}) => productos_data)
  const {open_warning_login} = useSelector(({datareducer}) => datareducer)

  return (
    <div style={{width: '100%'}}>
        <TituloPaginaTablet proporcional={proporcional}/>
        <InformacionProductoTablet proporcional={proporcional}/>
        <div style={{width: 871 / proporcional, marginLeft: 60 / proporcional, marginRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <ProductosRelacionadosTablet proporcional={proporcional}/>      
        <div style={{width: 871 / proporcional, marginLeft: 60 / proporcional, marginRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>       
        <FooterPrincipalTablet proporcional={proporcional}/>
        <FooterTablet proporcional={proporcional}/>
        <ModalCargando loading={productos_data.loading}/>
        {
            open_warning_login.open ? (
                <div className='position-fixed top-50 start-50 translate-middle shadow-lg rounded'
                    style={{width: 500 / proporcional, height: 'auto', background: 'white'}}>
                    <div className='d-flex' style={{width: 500 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional }}>
                        <img src={icono_warning} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 20 / proporcional}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 700, color: 'rgb(56, 77, 167)'}}>
                            Advertencia
                        </p>
                    </div>
                    <div style={{width: 500 / proporcional, height: 1 / proporcional, background: '#bdbdbd'}}/>
                    <div className='' style={{width: 500 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional }}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 700, color: '#212121'}}>
                            ¡Inicie sesión para agregar a su lista de favoritos!
                        </p>
                    </div>   
                    <div className='d-flex' style={{width: 500 / proporcional, height: 'auto', paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional }}>
                        <button className='btn' style={{width: 240 / proporcional, height: 50 / proporcional, color: boton_cancelar ? 'white' : 'rgb(56,77,167)',
                                    background: boton_cancelar ? 'rgb(56, 77, 167' : 'white', border: '1px solid rgb(56, 77, 167)', marginRight: 10 / proporcional}}
                                    onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                    onClick={() => dispatch(set_open_warning_login({open: false, warning: ''}))}>Cancelar</button>
                        <button className='btn' style={{width: 240 / proporcional, height: 50 / proporcional, color: !boton_iniciar ? 'white' : 'rgb(56,77,167)',
                                    background: !boton_iniciar ? 'rgb(56,77,167)' : 'white', 
                                    border: '1px solid rgb(56, 77, 167)', marginLeft: 10 / proporcional}}
                            onMouseOver={() => setBotonIniciar(true)} onMouseLeave={() => setBotonIniciar(false)}
                            onClick={() => {dispatch(set_open_warning_login({open: false, warning: ''})); navigate ('/signin')}}>Iniciar sesión</button>
                    </div>   
                </div>   
            ) : null
        }
    </div>
  )
}