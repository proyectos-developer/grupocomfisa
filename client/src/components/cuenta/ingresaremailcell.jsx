import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {correodata} from '../../redux/slice/correodata'
import { correoConstants } from '../../uri/correo-constants'
import { useNavigate } from 'react-router-dom'

export default function IngresarEmailCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    
    const [eemail, setEEmail] = useState('')

    const [boton_sesion, setBotonSesion] = useState(false)
    
    const {forgot_password} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
        if (forgot_password && forgot_password.messag){
            dispatch(correodata(correoConstants({}, true, 0).forgot_password))
            window.localStorage.setItem('correo', email)
            navigate ('/olvido-contraseña/confirmacion')
        }
    }, [forgot_password])

    const enviar_maill = () => {
        if (email === ''){
            setEEmail(email === '' ? true : false)
        }else{
            setEEmail(false)
            const data_user = {
                correo: email, 
            }
            dispatch(correodata(correoConstants(data_user, false, 0).forgot_password))
        }
    }

  return (
    <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, marginBottom: 34 / proporcional}}>
            <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', marginBottom: 6 / proporcional, textAlign: 'center',
                        fontWeight: 500, marginBottom: 20 / proporcional}}>
                Ingresa a tu mail
            </p>
            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#384da7', marginBottom: 6 / proporcional, textAlign: 'left',
                        fontWeight: 500, marginBottom: 20 / proporcional}}>
                Enviaremos un link a tu email para que recupres tu contraseña
            </p>
            <div style={{width: '100%', height: 'auto'}}>
                <input 
                    type='e-mail'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, border: `1px solid ${eemail ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                        marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional}}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    placeholder='Ingrese su email'/>
                    
                <button className='btn' style={{width: '100%', height: 50 / proporcional, background: boton_sesion ? 'white' : '#384da7', 
                    color: boton_sesion ? '#384da7' : 'white', border: '1px solid #384da7', marginBottom: 25 / proporcional,
                    fontWeight: 600, fontSize: 18 / proporcional}} onMouseOver={() => setBotonSesion(true)} onMouseLeave={() => setBotonSesion(false)}
                    onClick={() => enviar_maill()}>Enviar correo</button>

            </div>
        </div>
    </div>
  )
}