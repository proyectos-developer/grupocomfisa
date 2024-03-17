import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {correodata} from '../../redux/slice/correodata'
import { correoConstants } from '../../uri/correo-constants'

export default function FormularioContacto({proporcional}) {

    const dispatch = useDispatch()
    
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [mensajes, setMensajes] = useState('')
    
    const [enombres, setENombres] = useState(false)
    const [eapellidos, setEApellidos] = useState(false)
    const [enro_telefono, setENroTelefono] = useState(false)
    const [eemail, setEEmail] = useState(false)
    const [emensajes, setEMensajes] = useState(false)

    const enviar_mensaje = () => {
        if (nombres === '' || apellidos === '' || nro_telefono === '' || email === '' || mensajes === ''){
            setENombres(nombres === '' ? true : false)
            setEApellidos(apellidos === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEMensajes(mensajes === '' ? true : false)
        }else{
            setENombres(false)
            setEApellidos(false)
            setENroTelefono(false)
            setEEmail(false)
            setEMensajes(false)
            const data_mensaje = {
                nombres: nombres,
                apellidos: apellidos,
                telefono: nro_telefono,
                mensaje: mensajes, 
                correo: email
            }
            dispatch(correodata(correoConstants(data_mensaje, false, 0, 0).send_correo_web))
        }
    }

    return (
        <div style={{width: '100%', paddingRight: 15 / proporcional}}>
            <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: '#d18e32', marginTop: 15 / proporcional,
                    marginBottom: 15 / proporcional}}/>
            <p style={{fontSize: 22 / proporcional, fontWeight: 600, color: '#292929', lineHeight: `${26 / proporcional}px`}}>Contáctanos</p>
            <div style={{width: '100%', marginBottom: 20 / proporcional}} className='d-flex'>
                <div style={{width: '50%', paddingRight: 15 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Nombres *</p>
                    <input
                        type='text'
                        className='form-control'
                        onChange={(event) => setNombres(event.target.value)}
                        value={nombres}
                        style={{width: '100%', height: 50 / proporcional, border: !enombres ? '1px solid #ededed' : '1px solid red', 
                                color: '#848a90', paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                        placeholder='Ingrese sus nombres'
                    />
                </div>
                <div style={{width: '50%', paddingLeft: 15 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Apellidos *</p>
                    <input
                        type='text'
                        className='form-control'
                        onChange={(event) => setApellidos(event.target.value)}
                        value={apellidos}
                        style={{width: '100%', height: 50 / proporcional, border: !eapellidos ? '1px solid #ededed' : '1px solid red', 
                                color: '#848a90', paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                        placeholder='Ingrese sus apellidos'
                    />
                </div>
            </div>
            <div style={{width: '100%', marginBottom: 20 / proporcional}} className='d-flex'>
                <div style={{width: '50%', paddingRight: 15 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Teléfono *</p>
                    <input
                        type='number'
                        className='form-control'
                        onChange={(event) => setNroTelefono(event.target.value)}
                        value={nro_telefono}
                        style={{width: '100%', height: 50 / proporcional, border: !enro_telefono ? '1px solid #ededed' : '1px solid red', 
                                color: '#848a90', paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                        placeholder='Ingrese su teléfono'
                    />
                </div>
                <div style={{width: '50%', paddingLeft: 15 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>E-mail *</p>
                    <input
                        type='email'
                        className='form-control'
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        style={{width: '100%', height: 50 / proporcional, border: !eemail ? '1px solid #ededed' : '1px solid red', 
                                color: '#848a90', paddingTop: 12 / proporcional, 
                                paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                        placeholder='Ingrese su email'
                    />
                </div>
            </div>
            <div style={{width: '100%', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Tu mensaje *</p>
                <textarea
                    type='email'
                    rows='4'
                    className='form-control'
                    onChange={(event) => setMensajes(event.target.value)}
                    value={mensajes}
                    style={{width: '100%', height: 50 / proporcional, border: !emensajes ? '1px solid #ededed' : '1px solid red', 
                            color: '#848a90', height: 225 / proporcional, 
                            paddingTop: 12 / proporcional,  paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, 
                            background: '#f5f6f6'}} 
                    placeholder='Ingrese su mensaje.'
                />
            </div>
            <button className='btn rounded' style={{width: 200 / proporcional, hight: 50 / proporcional, background: '#d18e32', fontSize: 18 / proporcional, 
                    color: 'white', lineHeight: `${50 / proporcional}px`, fontWeight: 600, marginBottom: 20 / proporcional}}
                    onClick={() => enviar_mensaje()}>Enviar mensaje</button>
        </div>
    )
}
