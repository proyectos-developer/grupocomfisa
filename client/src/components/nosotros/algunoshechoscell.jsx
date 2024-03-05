import React from 'react'

import nosotros_historia from '../../assets/images/nosotros_historia.png'
import nosotros_tecnologia from '../../assets/images/nosotros_tecnologia.png'
import nosotros_equipo from '../../assets/images/nosotros_equipo.png'

export default function AlgunosHechosCell({proporcional}) {

    return (
        <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 55 / proporcional, paddingBottom: 55 / proporcional}}>
            <div style={{width: '100%', marginBottom: 8 / proporcional}} className='d-flex justify-content-center'>
                <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(209, 142, 50)'}}/>
            </div>
            <p style={{fontSize: 22 / proporcional, color: '#292929', fontWeight: 500, marginBottom: 17 / proporcional, textAlign: 'center'}}>ALGUNOS HECHOS</p>
            <p style={{fontSize: 34 / proporcional, color: '#292929', fontWeight: 500, marginBottom: 26 / proporcional, textAlign: 'center'}}>EXCELENTE EXPERIENCIA</p>
            <div style={{width: 459 / proporcional, marginBottom: 50 / proporcional}}>
                <img src={nosotros_historia} style={{width: 459 / proporcional, height: 350 / proporcional, 
                        marginBottom: 21 / proporcional}}/>
                <p style={{fontSize: 28 / proporcional, color: '#292929', fontWeight: 500, lineHeight: `${40 / proporcional}px`, marginBottom: 0}}>
                    Nuestra historia
                </p>
                <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(209, 142, 50)', marginBottom: 8 / proporcional}}/>
                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#rgb(95, 101, 109)', fontWeight: 400, marginBottom: 0}}>
                    Lorem Ipsum es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". 
                </p>
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 50 / proporcional}}>
                <img src={nosotros_tecnologia} style={{width: 459 / proporcional, height: 350 / proporcional, 
                        marginBottom: 21 / proporcional}}/>
                <p style={{fontSize: 28 / proporcional, color: '#292929', fontWeight: 500, lineHeight: `${40 / proporcional}px`, marginBottom: 0}}>
                    Moderna tecnología
                </p>
                <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(209, 142, 50)', marginBottom: 8 / proporcional}}/>
                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#rgb(95, 101, 109)', fontWeight: 400, marginBottom: 0}}>
                    Lorem Ipsum al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. 
                </p>
            </div>
            <div style={{width: 459 / proporcional}}>
                <img src={nosotros_equipo} style={{width: 459 / proporcional, height: 350 / proporcional, 
                        marginBottom: 21 / proporcional}}/>
                <p style={{fontSize: 28 / proporcional, color: '#292929', fontWeight: 500, lineHeight: `${40 / proporcional}px`, marginBottom: 0}}>
                    Profesionales
                </p>
                <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(209, 142, 50)', marginBottom: 8 / proporcional}}/>
                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#rgb(95, 101, 109)', fontWeight: 400, marginBottom: 0}}>
                    Lorem Ipsum es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".
                </p>
            </div>
        </div>
    )
}
