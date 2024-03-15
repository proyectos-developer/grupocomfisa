import React, { useState } from 'react'

import icono_alambre from '../../assets/iconos/icono_alambre.png'
import icono_cemento from '../../assets/iconos/icono_cemento.png'
import icono_cemento_1 from '../../assets/iconos/icono_cemento_1.png'
import icono_clavos from '../../assets/iconos/icono_clavos.png'
import icono_clavos_1 from '../../assets/iconos/icono_clavo_1.png'
import icono_cortador from '../../assets/iconos/icono_cortador.png'
import icono_cortador_1 from '../../assets/iconos/icono_cortador_1.png'
import icono_guantes from '../../assets/iconos/icono_guantes.png'
import icono_ladrillos from '../../assets/iconos/icono_ladrillos.png'
import icono_lija from '../../assets/iconos/icono_lija.png'
import icono_planchas from '../../assets/iconos/icono_planchas.png'
import icono_sellado from '../../assets/iconos/icono_sellado.png'
import icono_tubo from '../../assets/iconos/icono_tubo.png'
import icono_varilla from '../../assets/iconos/icono_varilla.png'
import icono_varilla_1 from '../../assets/iconos/icono_varilla_1.png'

import cortadora from '../../assets/productos/cortadora_427.png'
import cortadora_1 from '../../assets/productos/cortadora_1_427.png'
import lijas from '../../assets/productos/lijas_427.png'
import varillas from '../../assets/productos/varillas_427.png'
import varillas_1 from '../../assets/productos/varillas_1_427.png'
import tecnopor from '../../assets/productos/tecnopor_427.png'
import clavos from '../../assets/productos/clavos_427.png'
import clavos_1 from '../../assets/productos/clavos_1_427.png'
import alambre from '../../assets/productos/alambre_427.png'
import sellador from '../../assets/productos/sellador_427.png'
import cemento from '../../assets/productos/cemento_427.png'
import cemento_1 from '../../assets/productos/cemento_1_427.png'
import ladrillos from '../../assets/productos/ladrillos_427.png'
import guantes from '../../assets/productos/guantes_427.png'
import tubos from '../../assets/productos/tubos_427.png'

import CardProveedorCell from './card/proveedorcell.jsx'

export default function ProductosProveedoresCell({proporcional}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')

    const lista_proveedores = [
        {id: '15', subtitulo: 'ACEROS AREQUIPA', titulo: 'BARRAS CORRUGADAS', descripcion: 'Se utiliza como material de refuerzo en las construcciones de concreto armado. Debido a sus características y propiedades posee un función esencial en la construcción de obras de infraestructura, de vivienda, comerciales e industriales.', icono: icono_varilla, logo: varillas},
        {id: '30', subtitulo: 'INKAFERRO', titulo: 'BARRAS CORRUGADAS', descripcion: 'Se utiliza como material de refuerzo en las construcciones de concreto armado. Debido a sus características y propiedades posee un función esencial en la construcción de obras de infraestructura, de vivienda, comerciales e industriales.', icono: icono_varilla_1, logo: varillas_1},
        {id: '17', subtitulo: 'METALYCK', titulo: 'ALAMBRE RECOCIDO', descripcion: '', icono: icono_alambre, logo: alambre},
        {id: '26', subtitulo: 'ACEROS AREQUIPA', titulo: 'CLAVO DE ALBAñILERÍA', descripcion: 'Los clavos son elementos de fijación metálica y su objetivo principal es fija elementos de construcción.', icono: icono_clavos, logo: clavos},
        {id: '29', subtitulo: 'TREAMPERÚ', titulo: 'CLAVO DE ALBAñILERÍA', descripcion: 'Los clavos son elementos de fijación metálica y su objetivo principal es fija elementos de construcción.', icono: icono_clavos_1, logo: clavos_1},
        {id: '23', subtitulo: 'PIRAMIDE', titulo: 'LADRILLOS', descripcion: 'Los ladrillos se utiliazan en construcción para cerramientos, fachadas y particiones. Se utiliza principalemnte para construir muros o tabiques. Aunque se pueden colocar a hueso, lo habitual es que se reciban con mortero.', icono: icono_ladrillos, logo: ladrillos},
        {id: '21', subtitulo: 'INKA', titulo: 'CEMENTO', descripcion: 'El cemento es un material de construcción esencial; de hecho, es el más utiliazado en el mundo. La mayoría de las construcciones lo emplean en, por lo menos, una de sus etapas: cimientos, suelos, dinteles, muros, paredes o techos', icono: icono_cemento, logo: cemento},
        {id: '22', subtitulo: 'UNACEM', titulo: 'CEMENTO', descripcion: 'El cemento es un material de construcción esencial; de hecho, es el más utiliazado en el mundo. La mayoría de las construcciones lo emplean en, por lo menos, una de sus etapas: cimientos, suelos, dinteles, muros, paredes o techos', icono: icono_cemento_1, logo: cemento_1},
        {id: '16', subtitulo: 'ETSA PERÚ', titulo: 'PLANCHAS TECNOPOR', descripcion: 'El tecnopor es utilizado en el sector de las obras civiles y construcción, en techos y paredes para el aislamiento térmico y acústico.', icono: icono_planchas, logo: tecnopor},
        {id: '19', subtitulo: 'MAJESTAD', titulo: 'SELLADOR', descripcion: 'El sellador genera en la pared una barrera que impide que en los poros de la superficie entre cualquier tipo de sustancia o material que pueda perjudicar a la pintura.', icono: icono_sellado, logo: sellador},
        {id: '12', subtitulo: 'NORTON', titulo: 'DISCOS PARA CORTAR', descripcion: 'Usados en trabajos artesanales e industriales para darle forma a un material, para cortar o para mejorar el acabado de la superficie del producto.', icono: icono_cortador, logo: cortadora},
        {id: '13', subtitulo: 'BRIKER', titulo: 'DISCOS PARA CORTAR', descripcion: 'Usados en trabajos artesanales e industriales para darle forma a un material, para cortar o para mejorar el acabado de la superficie del producto.', icono: icono_cortador_1, logo: cortadora_1},
        {id: '24', subtitulo: 'COMFISA', titulo: 'GUANTES DE PROTECCIÓN', descripcion: 'Guante reforzador de nitrilo en la palma para proteger contra cortes leves. De fácil manipulación y flexible.', icono: icono_guantes, logo: guantes},
        {id: '14', subtitulo: 'ASA', titulo: 'LIJAS DE AGUA Y DE FIERRO', descripcion: 'Las lijas suelen usarse para dejar lisas las paredes, previo al pintado. Las lijas también se utilizan en carpintería, para el acabado de diferentes piezas', icono: icono_lija, logo: lijas},
        {id: '25', subtitulo: 'TIGRE', titulo: 'TUBOS Y CONEXIONES', descripcion: '', icono: icono_tubo, logo: tubos}
    ]

    return (
        <div style={{background: 'white', width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, marginBottom: 34 / proporcional}}>
                <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', marginBottom: 6 / proporcional, textAlign: 'center',
                            fontWeight: 500}}>
                    Nuestros productos
                </p>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, color: 'rgb(95, 101, 109)', marginBottom: 0 / proporcional, textAlign: 'center',
                            fontWeight: 400}}>
                    Contamos con productos de la siguientes marcas
                </p>
            </div>
            <div style={{background: 'white', width: 499 / proporcional, paddingTop: 57 / proporcional, paddingBottom: 57 / proporcional}}>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[0].id} titulo={lista_proveedores[0].titulo} subtitulo={lista_proveedores[0].subtitulo} descripcion={lista_proveedores[0].descripcion}  icono={lista_proveedores[0].icono} logo={lista_proveedores[0].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[1].id} titulo={lista_proveedores[1].titulo} subtitulo={lista_proveedores[1].subtitulo} descripcion={lista_proveedores[1].descripcion}  icono={lista_proveedores[1].icono} logo={lista_proveedores[1].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[2].id} titulo={lista_proveedores[2].titulo} subtitulo={lista_proveedores[2].subtitulo} descripcion={lista_proveedores[2].descripcion}  icono={lista_proveedores[2].icono} logo={lista_proveedores[2].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[3].id} titulo={lista_proveedores[3].titulo} subtitulo={lista_proveedores[3].subtitulo} descripcion={lista_proveedores[3].descripcion}  icono={lista_proveedores[3].icono} logo={lista_proveedores[3].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[4].id} titulo={lista_proveedores[4].titulo} subtitulo={lista_proveedores[4].subtitulo} descripcion={lista_proveedores[4].descripcion}  icono={lista_proveedores[4].icono} logo={lista_proveedores[4].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[5].id} titulo={lista_proveedores[5].titulo} subtitulo={lista_proveedores[5].subtitulo} descripcion={lista_proveedores[5].descripcion}  icono={lista_proveedores[5].icono} logo={lista_proveedores[5].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[6].id} titulo={lista_proveedores[6].titulo} subtitulo={lista_proveedores[6].subtitulo} descripcion={lista_proveedores[6].descripcion}  icono={lista_proveedores[6].icono} logo={lista_proveedores[6].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[7].id} titulo={lista_proveedores[7].titulo} subtitulo={lista_proveedores[7].subtitulo} descripcion={lista_proveedores[7].descripcion}  icono={lista_proveedores[7].icono} logo={lista_proveedores[7].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[8].id} titulo={lista_proveedores[8].titulo} subtitulo={lista_proveedores[8].subtitulo} descripcion={lista_proveedores[8].descripcion}  icono={lista_proveedores[8].icono} logo={lista_proveedores[8].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[9].id} titulo={lista_proveedores[9].titulo} subtitulo={lista_proveedores[9].subtitulo} descripcion={lista_proveedores[9].descripcion}  icono={lista_proveedores[9].icono} logo={lista_proveedores[9].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[10].id} titulo={lista_proveedores[10].titulo} subtitulo={lista_proveedores[10].subtitulo} descripcion={lista_proveedores[10].descripcion}  icono={lista_proveedores[10].icono} logo={lista_proveedores[10].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[11].id} titulo={lista_proveedores[11].titulo} subtitulo={lista_proveedores[11].subtitulo} descripcion={lista_proveedores[11].descripcion}  icono={lista_proveedores[11].icono} logo={lista_proveedores[11].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[12].id} titulo={lista_proveedores[12].titulo} subtitulo={lista_proveedores[12].subtitulo} descripcion={lista_proveedores[12].descripcion}  icono={lista_proveedores[12].icono} logo={lista_proveedores[12].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[13].id} titulo={lista_proveedores[13].titulo} subtitulo={lista_proveedores[13].subtitulo} descripcion={lista_proveedores[13].descripcion}  icono={lista_proveedores[13].icono} logo={lista_proveedores[13].logo}/>
                <CardProveedorCell proporcional={proporcional} id={lista_proveedores[14].id} titulo={lista_proveedores[14].titulo} subtitulo={lista_proveedores[14].subtitulo} descripcion={lista_proveedores[14].descripcion}  icono={lista_proveedores[14].icono} logo={lista_proveedores[14].logo}/>
            </div>
        </div>
    )
}