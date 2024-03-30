import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'
import { useNavigate } from 'react-router-dom'
import { set_authenticated, set_data_cliente } from '../../redux/actions/dataactions'
import { clientesdata } from '../../redux/slice/clientesdata'
import { clientesConstants } from '../../uri/cliente-constants'
import {carritodata} from '../../redux/slice/carritodata'
import { carritoConstants } from '../../uri/carrito-constants'

export default function Signup({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [verificar_password, setVerificarPassword] = useState ('')
    
    const [eemail, setEEmail] = useState(false)
    const [epassword, setEPassword] = useState (false)
    const [enombres, setENombres] = useState(false)
    const [eapellidos, setEApellidos] = useState (false)
    const [everificar_password, setEVerificarPassword] = useState(false)
    const [enro_telefono, setENroTelefono] = useState (false)

    const [boton_sesion, setBotonSesion] = useState(false)
    
    const {register_user} = useSelector(({begin_data}) => begin_data)
    const {new_cliente} = useSelector(({clientes_data}) => clientes_data)
    const {update_usuario_cotizar} = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        if (register_user && register_user.success === true && register_user.user){
            window.localStorage.setItem('session_id', register_user.user.session_id)
            window.localStorage.setItem('usuario', register_user.user.user.usuario)
            window.localStorage.setItem('correo', register_user.user.user.correo)
            dispatch (begindata(beginConstants({}, true, 0).register_user))
            const new_cliente = {
                nombres: nombres,
                apellidos: apellidos,
                nro_telefono: nro_telefono,
                correo: email,
                usuario: email.split('@')[0] + '' + nro_telefono,
                nro_documento: '',
                tipo_documento: '',
                razon_social: '',
                nro_ruc: ''
            }
            dispatch (clientesdata(clientesConstants(0, new_cliente, false).new_cliente))
        }
    }, [register_user])

    useEffect (() => {
        if (new_cliente && new_cliente.success === true && new_cliente.cliente){
            dispatch(set_data_cliente(new_cliente.cliente))
            dispatch(set_authenticated(true))
            if (window.localStorage.getItem ('shop_id')){
                const data_update = {
                    usuario: window.localStorage.getItem ('usuario')
                }
                dispatch(carritodata(carritoConstants(0, window.localStorage.getItem('shop_id'), data_update, false).update_usuario_cotizar))
            }else{
                navigate ('/')
            }
        }
    }, [new_cliente])

    useEffect (() => {
        if (update_usuario_cotizar && update_usuario_cotizar.success === true && update_usuario_cotizar.lista_cotizar){
            navigate ('/')
        }
    }, [update_usuario_cotizar])

    const registra_datos = () => {
        if (email === '' || password === '' || nombres === '' || nro_telefono === '' || verificar_password === '' || (password !== verificar_password)){
            setEEmail(email === '' ? true : false)
            setEPassword(password === '' ? true : false)
            setENombres(nombres === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEVerificarPassword(verificar_password === '' ? true : false)
        }else{
            setEEmail(false)
            setEPassword(false)
            setENombres(false)
            setENroTelefono(false)
            setEVerificarPassword(false)
            const data_user = {
                correo: email, 
                password: password,
                nro_telefono: nro_telefono,
                usuario: email.split('@')[0] + '' + nro_telefono
            }
            dispatch(begindata(beginConstants(data_user, false, 0).register_user))
        }
    }

  return (
    <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, marginBottom: 34 / proporcional}}>
            <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#007BA7', marginBottom: 6 / proporcional, textAlign: 'center',
                        fontWeight: 500, marginBottom: 25 / proporcional}}>
                Registra tus datos
            </p>
            <div style={{width: 600 / proporcional, marginLeft: 300 / proporcional, marginRight: 300 / proporcional}}>
                <div className='d-flex' style={{width: 600 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional}}>
                    <input 
                        type='default'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${enombres ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginRight: 10 / proporcional}}
                        onChange={(event) => setNombres(event.target.value)}
                        value={nombres}
                        placeholder='Ingrese sus nombres'/>

                    <input 
                        type='default'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${eapellidos ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginLeft: 10 / proporcional}}
                        onChange={(event) => setApellidos(event.target.value)}
                        value={apellidos}
                        placeholder='Ingrese sus apellidos'/>
                </div>

                <div className='d-flex' style={{width: 600 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional}}>
                    <input 
                        type='number'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${enro_telefono ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginRight: 10 / proporcional, marginRight: 10 / proporcional}}
                        onChange={(event) => setNroTelefono(event.target.value)}
                        value={nro_telefono}
                        placeholder='Ingrese su número de teléfono'/>

                    <input 
                        type='e-mail'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${eemail ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional, marginLeft: 10 / proporcional}}
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        placeholder='Ingrese su email'/>
                </div>
                
                <input 
                    type='password'
                    className='form-control'
                    style={{width: 600 / proporcional, height: 50 / proporcional, border: `1px solid ${epassword ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional, 
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    placeholder='Ingrese su contraseña'/>
                    
                <input 
                    type='password'
                    className='form-control'
                    style={{width: 600 / proporcional, height: 50 / proporcional, border: `1px solid ${everificar_password ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional, 
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setVerificarPassword(event.target.value)}
                    value={verificar_password}
                    placeholder='Repita su contraseña'/>

                <div className='d-flex justify-content-end'
                    style={{width: 600 / proporcional, height: 20 / proporcional, marginBottom: 25 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#007BA7', fontWeight: 500, marginRight: 5 / proporcional,
                        marginBottom: 0}}>
                        ¿Ya tienes una cuenta?
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#007BA7', fontWeight: 700,
                        cursor: 'pointer', marginBottom: 0, textDecoration: 'underline'}} onClick={() => navigate ('/signin')}>
                        Ingresa aquí
                    </p>
                </div>

                <button className='btn' style={{width: 600 / proporcional, height: 50 / proporcional, background: boton_sesion ? 'white' : '#8B4513', 
                    color: boton_sesion ? '#8B4513' : 'white', border: '1px solid #8B4513', marginBottom: 25 / proporcional,
                    fontWeight: 600, fontSize: 18 / proporcional}} onMouseOver={() => setBotonSesion(true)} onMouseLeave={() => setBotonSesion(false)}
                    onClick={() => registra_datos()}>Regístrate</button>

            </div>
        </div>
    </div>
  )
}