import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'
import { useNavigate } from 'react-router-dom'

export default function NuvaTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [password, setPassword] = useState ('')
    const [verificar_password, setVerificarPassword] = useState ('')
    
    const [epassword, setEPassword] = useState (false)
    const [everificar_password, setEVerificarPassword] = useState(false)

    const [boton_sesion, setBotonSesion] = useState(false)
    
    const {update_password} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
        if (update_password && update_password.success === true && update_password.user){
            window.localStorage.removeItem ('correo')
            window.localStorage.removeItem ('usuario')
            navigate('/cambio-password/actualizado')
        }
    }, [update_password])

    const cambiar_password = () => {
        if (password === '' || verificar_password === '' || (password !== verificar_password)){
            setEPassword(password === '' ? true : false)
            setEVerificarPassword(verificar_password === '' ? true : false)
        }else{
            setEPassword(false)
            setEVerificarPassword(false)
            const data_user = {
                password: password,
            }
            dispatch(begindata(beginConstants(data_user, false, window.localStorage.getItem ('usuario')).update_password))
        }
    }

  return (
    <div style={{width: '100%', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, marginBottom: 34 / proporcional}}>
            <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', marginBottom: 6 / proporcional, textAlign: 'center',
                        fontWeight: 500, marginBottom: 25 / proporcional}}>
                Ingresa tu nueva contraseña
            </p>
            <div style={{width: '100%'}}>
                <input 
                    type='password'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, border: `1px solid ${epassword ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional, 
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    placeholder='Ingrese su contraseña'/>
                    
                <input 
                    type='password'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, border: `1px solid ${everificar_password ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional, 
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setVerificarPassword(event.target.value)}
                    value={verificar_password}
                    placeholder='Repita su contraseña'/>

            </div>

            <button className='btn' style={{width: '100%', height: 50 / proporcional, background: boton_sesion ? 'white' : '#384da7', 
                color: boton_sesion ? '#384da7' : 'white', border: '1px solid #384da7', marginBottom: 25 / proporcional,
                fontWeight: 600, fontSize: 18 / proporcional}} onMouseOver={() => setBotonSesion(true)} onMouseLeave={() => setBotonSesion(false)}
                onClick={() => cambiar_password()}>Cambiar password</button>

        </div>
    </div>
  )
}