import React, { useState } from 'react'

import logo from '../assets/logo_web_75.png'

import icono_facebook from '../assets/redes/icono_facebook_96.png'
import icono_twitter from '../assets/redes/icono_twitter_96.png'
import icono_linkedin from '../assets/redes/icono_linkedin_96.png'
import icono_instagram from '../assets/redes/icono_instagram_96.png'
import icono_tiktok from '../assets/redes/icono_tiktok_96.png'

import icono_facebook_black from '../assets/redes/icono_facebook_black_96.png'
import icono_twitter_black from '../assets/redes/icono_twitter_black_96.png'
import icono_linkedin_black from '../assets/redes/icono_linkedin_black_96.png'
import icono_instagram_black from '../assets/redes/icono_instagram_black_96.png'
import icono_tiktok_black from '../assets/redes/icono_tiktok_black_96.png'
import { useNavigate } from 'react-router-dom'

export default function FooterTablet({proporcional}) {

    const navigate = useNavigate()
    const [seleccion_red, setSeleccionRed] = useState ('')

    return (
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: '#f9f9f9',
                paddingTop: 25 / proporcional, paddingBottom: 25 / proporcional}}>
            <div style={{width: 871 / proporcional}} className='d-flex'>
                <div style={{width: '40%'}}>
                    <img src={logo} style={{width: 213 / proporcional, height: 75 / proporcional, cursor: 'pointer'}}
                        onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}/>
                </div>
                <div className='d-flex justify-content-end' style={{width: '60%'}}>
                    <a href='https://www.facebook.com/Comfisa' target='_blank'>
                        <img src={seleccion_red === 'facebook' ? icono_facebook_black : icono_facebook} 
                                style={{width: 17 / proporcional, height: 17 / proporcional, marginRight: 13 / proporcional,
                                    marginTop: 29 / proporcional, marginBottom: 29 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionRed('facebook')} onMouseLeave={() => setSeleccionRed('')}/>
                    </a>
                    <a href='https://www.linkedin.com/in/comfisa-973035158/' target='_blank'>
                        <img src={seleccion_red === 'linkedin' ? icono_linkedin_black : icono_linkedin} 
                                style={{width: 17 / proporcional, height: 17 / proporcional, marginRight: 13 / proporcional,
                                    marginTop: 29 / proporcional, marginBottom: 29 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionRed('linkedin')} onMouseLeave={() => setSeleccionRed('')}/>
                    </a>
                    <a href='https://www.instagram.com/grupocomfisa_' target='_blank'>
                    <img src={seleccion_red === 'instagram' ? icono_instagram_black : icono_instagram}
                            style={{width: 17 / proporcional, height: 17 / proporcional, marginRight: 13 / proporcional,
                                marginTop: 29 / proporcional, marginBottom: 29 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setSeleccionRed('instagram')} onMouseLeave={() => setSeleccionRed('')}/>
                    </a>
                    <a href='https://www.tiktok.com/@comfisasac' target='_blank'>
                        <img src={seleccion_red === 'tiktok' ? icono_tiktok_black : icono_tiktok} 
                                style={{width: 17 / proporcional, height: 17 / proporcional,
                                    marginTop: 29 / proporcional, marginBottom: 29 / proporcional, cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionRed('tiktok')} onMouseLeave={() => setSeleccionRed('')}/>
                    
                    </a>
                </div>
            </div>
        </div>
    )
}