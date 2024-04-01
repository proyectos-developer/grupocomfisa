import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {begindata} from '../../../redux/slice/begindata'
import { beginConstants } from '../../../uri/begin-constants'
import { useNavigate } from 'react-router-dom'
import { set_authenticated, set_data_cliente } from '../../../redux/actions/dataactions'
import { clientesdata } from '../../../redux/slice/clientesdata'
import { clientesConstants } from '../../../uri/cliente-constants'

export default function DataInfo({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [tipo_documento, setTipoDocumento] = useState('')
    const [nro_documento, setNroDocumento] = useState('')
    const [usuario, setUsuario] = useState('')
    const [razon_social, setRazonSocial] = useState('')
    const [nro_ruc, setNroRuc] = useState('')

    const [editar_info, setEditarInfo] = useState(false)
    
    const [eemail, setEEmail] = useState(false)
    const [enombres, setENombres] = useState(false)
    const [eapellidos, setEApellidos] = useState (false)
    const [enro_telefono, setENroTelefono] = useState (false)

    const [boton_guardar, setBotonGuardar] = useState(false)
    const [boton_cancelar, setBotonCancelar] = useState(false)
    
    const {get_cliente} = useSelector(({clientes_data}) => clientes_data)
    const {update_cliente} = useSelector(({clientes_data}) => clientes_data)

    useEffect(() => {
        dispatch (clientesdata(clientesConstants (window.localStorage.getItem('usuario'), {}, false).get_cliente))
    }, [])

    useEffect (() => {
        if (get_cliente && get_cliente.success === true && get_cliente.cliente){
            setNombres (get_cliente.cliente.nombres)
            setApellidos (get_cliente.cliente.apellidos)
            setEmail (get_cliente.cliente.correo)
            setNroTelefono (get_cliente.cliente.nro_telefono)
            setTipoDocumento (get_cliente.cliente.tipo_documento)
            setNroDocumento (get_cliente.cliente.nro_documento)
            setRazonSocial (get_cliente.cliente.razon_social)
            setNroRuc (get_cliente.cliente.nro_ruc)
            setUsuario (get_cliente.cliente.usuario)
        }
    }, [get_cliente])

    useEffect (() => {
        if (update_cliente && update_cliente.success === true && update_cliente.cliente){
            setEditarInfo (false)
        }
    }, [update_cliente])

    const actualizar_datos = () => {
        if (nombres === ''){
            setENombres(nombres === '' ? true : false)
        }else{
            setENombres(false)
            const data_update = {
                nombres: nombres,
                apellidos: apellidos,
                tipo_documento: tipo_documento,
                nro_documento: nro_documento,
                razon_social: razon_social,
                nro_ruc: nro_ruc
            }
            dispatch(clientesdata(clientesConstants(usuario, data_update, false).update_cliente))
        }
    }

  return (
    <div style={{width: 600 / proporcional, background: 'white'}}>
        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#007BA7', textAlign: 'left',
                    fontWeight: 500, marginBottom: 25 / proporcional}}>
            (*) Se enviará tus pedidos de cotizaciones al correo indicado o a tu número.
        </p>
        <div style={{background: 'white', width: 600 / proporcional, marginBottom: 20 / proporcional}}>
            <div style={{width: 600 / proporcional}}>
                <div className='d-flex' style={{width: 600 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional}}>
                    <input 
                        disabled={!editar_info}
                        type='default'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${enombres ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginRight: 10 / proporcional}}
                        onChange={(event) => setNombres(event.target.value)}
                        value={nombres}
                        placeholder='Ingrese sus nombres'/>

                    <input 
                        type='default'
                        disabled={!editar_info}
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${eapellidos ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginLeft: 10 / proporcional}}
                        onChange={(event) => setApellidos(event.target.value)}
                        value={apellidos}
                        placeholder='Ingrese sus apellidos'/>
                </div>

                <div className='d-flex' style={{width: 600 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional}}>
                    <input 
                        disabled={true}
                        type='number'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${enro_telefono ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginRight: 10 / proporcional}}
                        onChange={(event) => setNroTelefono(event.target.value)}
                        value={nro_telefono}
                        placeholder='Ingrese su número de teléfono'/>

                    <input 
                        type='e-mail'
                        disabled={true}
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid ${eemail ? 'red' : 'rgb(158,158,158, 0.6)'}`, borderRadius: 8 / proporcional,
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional, marginLeft: 10 / proporcional}}
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        placeholder='Ingrese su email'/>
                </div>

                <div className='d-flex' style={{width: 600 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional}}>
                    <select
                        disabled={!editar_info}
                        style={{width: 290 / proporcional, marginRight: 10 / proporcional, border: '1px solid rgb(158, 158, 158, 0.6)', height: 50 / proporcional,
                                borderRadius: 4 / proporcional, background: 'white'}}
                        className='form-select'
                        onChange={(event) => setTipoDocumento(event.target.value)}
                        id='tipo_documento'>
                        <option value='0'>{tipo_documento === '' ? 'Tipo de documento' : tipo_documento}</option>
                        <option value='D.N.I'>D.N.I</option>
                        <option value='Pasaporte'>Pasaporte</option>
                        <option value='L.E'>L.E</option>
                        <option value='Otro'>Otro</option>
                    </select>
                    <input 
                        disabled={!editar_info}
                        type='number'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid rgb(158,158,158, 0.6)`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginLeft: 10 / proporcional}}
                        onChange={(event) => setNroDocumento(event.target.value)}
                        value={nro_documento}
                        placeholder='Ingrese su número documento'/>
                </div>

                <div className='d-flex' style={{width: 600 / proporcional, height: 50 / proporcional, marginBottom: 25 / proporcional}}>
                    <input 
                        disabled={!editar_info}
                        type='default'
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid rgb(158,158,158, 0.6)`, borderRadius: 8 / proporcional,
                            background: 'white', fontSize: 16 / proporcional, marginRight: 10 / proporcional}}
                        onChange={(event) => setRazonSocial(event.target.value)}
                        value={razon_social}
                        placeholder='Ingrese su razón social'/>

                    <input 
                        type='default'
                        disabled={!editar_info}
                        className='form-control'
                        style={{width: 290 / proporcional, height: 50 / proporcional, border: `1px solid rgb(158,158,158, 0.6)`, borderRadius: 8 / proporcional,
                            marginBottom: 25 / proporcional, background: 'white', fontSize: 16 / proporcional, marginLeft: 10 / proporcional}}
                        onChange={(event) => setNroRuc(event.target.value)}
                        value={nro_ruc}
                        placeholder='Ingrese su número de R.U.C'/>
                </div>

                <div className={`d-flex justify-content-${editar_info ? 'between' : 'end'}`}>
                    {
                        editar_info ? (
                            <button className='btn' style={{width: editar_info ? 290 / proporcional : 300 / proporcional, height: 50 / proporcional, background: boton_cancelar ? '#8B4513' : 'white', 
                                color: boton_cancelar ? 'white' : '#8B4513', border: '1px solid #8B4513', marginBottom: 25 / proporcional,
                                fontWeight: 600, fontSize: 18 / proporcional}} onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                onClick={() => setEditarInfo (false)}>Cancelar</button>
                        ) : null
                    }
                    <button className='btn' style={{width: editar_info ? 290 / proporcional : 290 / proporcional, height: 50 / proporcional, background: boton_guardar ? 'white' : '#8B4513', 
                        color: boton_guardar ? '#8B4513' : 'white', border: '1px solid #8B4513', marginBottom: 25 / proporcional,
                        fontWeight: 600, fontSize: 18 / proporcional}} onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                        onClick={() => editar_info ? actualizar_datos() : setEditarInfo (!editar_info)}>{editar_info ? 'Actualiar datos' : 'Editar datos'}</button>
                </div>

            </div>
        </div>
    </div>
  )
}