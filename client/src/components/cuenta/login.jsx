import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'
import { useNavigate } from 'react-router-dom'
import { set_authenticated } from '../../redux/actions/dataactions'
import {carritodata} from '../../redux/slice/carritodata'
import { carritoConstants } from '../../uri/carrito-constants'

export default function Login({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    
    const [eemail, setEEmail] = useState('')
    const [epassword, setEPassword] = useState ('')

    const [boton_sesion, setBotonSesion] = useState(false)
    
    const {login_user} = useSelector(({begin_data}) => begin_data)
    const {update_usuario_cotizar} = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        if (login_user && login_user.success === true && login_user.user){
            window.localStorage.setItem('usuario', login_user.user.user.usuario)
            window.localStorage.setItem('correo', login_user.user.user.correo)
            window.localStorage.setItem('session_id', login_user.user.session_id)
            dispatch (begindata(beginConstants({}, true, 0).login_user))
            dispatch(set_authenticated(true))
            if (window.localStorage.getItem ('shop_id')){
                const data_update = {
                    usuario: login_user.user.user.usuario
                }
                dispatch(carritodata(carritoConstants(0, window.localStorage.getItem('shop_id'), data_update, false).update_usuario_cotizar))
            }else{
                navigate ('/')
            }
        }
    }, [login_user])

    useEffect (() => {
        if (update_usuario_cotizar && update_usuario_cotizar.success === true && update_usuario_cotizar.lista_cotizar){
            navigate ('/')
        }
    }, [update_usuario_cotizar])

    const iniciar_sesion = () => {
        if (email === '' || password === ''){
            setEEmail(email === '' ? true : false)
            setEPassword(password === '' ? true : false)
        }else{
            setEEmail(false)
            setEPassword(false)
            const data_user = {
                correo: email, 
                password: password
            }
            dispatch(begindata(beginConstants(data_user, false, 0).login_user))
        }
    }

  return (
    <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, marginBottom: 34 / proporcional}}>
            <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', marginBottom: 6 / proporcional, textAlign: 'center',
                        fontWeight: 500, marginBottom: 25 / proporcional}}>
                Ingresa a tu cuenta
            </p>
            <div style={{width: 600 / proporcional, marginLeft: 300 / proporcional, marginRight: 300 / proporcional}}>
                <input 
                    type='default'
                    className='form-control'
                    style={{width: 600 / proporcional, height: 50 / proporcional, border: `1px solid ${eemail ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                        marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    placeholder='Ingrese su email o número celular'/>
                    
                <input 
                    type='password'
                    className='form-control'
                    style={{width: 600 / proporcional, height: 50 / proporcional, border: `1px solid ${epassword ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional, 
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    placeholder='Ingrese su contraseña'/>
                <div className='d-flex justify-content-end'
                    style={{width: 600 / proporcional, height: 20 / proporcional, marginBottom: 25 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#384da7', fontWeight: 500, marginRight: 5 / proporcional,
                        marginBottom: 0}}>
                        ¿Aún no tienes una cuenta?
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#384da7', fontWeight: 700,
                        cursor: 'pointer', marginBottom: 0, textDecoration: 'underline'}} onClick={() => navigate ('/registro')}>
                        Ingresa aquí
                    </p>
                </div>

                <button className='btn' style={{width: 600 / proporcional, height: 50 / proporcional, background: boton_sesion ? 'white' : '#384da7', 
                    color: boton_sesion ? '#384da7' : 'white', border: '1px solid #384da7', marginBottom: 25 / proporcional,
                    fontWeight: 600, fontSize: 18 / proporcional}} onMouseOver={() => setBotonSesion(true)} onMouseLeave={() => setBotonSesion(false)}
                    onClick={() => iniciar_sesion()}>Iniciar sesión</button>

                <div className='d-flex justify-content-center'
                    style={{width: 600 / proporcional, height: 20 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#384da7', fontWeight: 500, marginRight: 5 / proporcional,
                        marginBottom: 0, cursor: 'pointer'}} onClick={() => navigate ('/olvidaste-contraseña')}>
                        ¿Olvidaste tu contraseña?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}