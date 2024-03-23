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
import icono_ladrillos_1 from '../../assets/iconos/icono_ladrillos_1.png'
import icono_lija from '../../assets/iconos/icono_lija.png'
import icono_planchas from '../../assets/iconos/icono_planchas.png'
import icono_sellado from '../../assets/iconos/icono_sellado.png'
import icono_tubo from '../../assets/iconos/icono_tubo.png'
import icono_varilla from '../../assets/iconos/icono_varilla.png'
import icono_varilla_1 from '../../assets/iconos/icono_varilla_1.png'
import icono_barras from '../../assets/iconos/icono_barras.png'

import cortadora from '../../assets/productos/cortadora_370.png'
import cortadora_1 from '../../assets/productos/cortadora_1_370.png'
import lijas from '../../assets/productos/lijas_370.png'
import varillas from '../../assets/productos/varillas_370.png'
import varillas_1 from '../../assets/productos/varillas_1_370.png'
import tecnopor from '../../assets/productos/tecnopor_370.png'
import clavos from '../../assets/productos/clavos_370.png'
import clavos_1 from '../../assets/productos/clavos_1_370.png'
import alambre from '../../assets/productos/alambre_370.png'
import sellador from '../../assets/productos/sellador_370.png'
import cemento from '../../assets/productos/cemento_370.png'
import cemento_1 from '../../assets/productos/cemento_1_370.png'
import ladrillos from '../../assets/productos/ladrillos_370.png'
import ladrillos_1 from '../../assets/productos/ladrillos_1_370.png'
import guantes from '../../assets/productos/guantes_370.png'
import tubos from '../../assets/productos/tubos_370.png'
import barras from '../../assets/productos/barras_370.png'

import CardProveedor from './card/proveedor.jsx'

export default function ProductosProveedores({proporcional}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')

    const lista_proveedores = [
        {id: '15', subtitulo: 'ACEROS AREQUIPA', titulo: 'BARRAS CORRUGADAS', descripcion: `El acero nace de la fusión de diferentes cargas metálicas, con contenido de hierro, ferroaleaciones y carbono, las cuales determinan su estructura molecular pero este proceso no es tan simple como parece. Para conocerlo, explicaremos el proceso de producción de Corporación Aceros Arequipa, empresa peruana líder en la fabricación y comercialización de productos de acero en el Perú, el cual cuenta con dos sedes productivas.`, icono: icono_varilla, logo: varillas},

        {id: '30', subtitulo: 'INKAFERRO', titulo: 'BARRAS CORRUGADAS', descripcion: `Las barras corrugadas ArcelorMittal ASTM A615/A615M grado 60 se emplea como acero de refuerzo para todo tipo de obra: viviendas, edificaciones, centros comerciales y obras de gran envergadura como represas, puentes, 
        puertos, losas industriales, entre otrosposee una función esencial en la construcción de obras de infraestructura, de vivienda, comerciales e industriales de calidad internacional.`, icono: icono_varilla_1, logo: varillas_1},

        {id: '32', subtitulo: 'SIDERPERU', titulo: 'BARRAS CONSTRUCCIÓN', descripcion: `Las barras de refuerzo, también conocidas como barras corrugadas, son usadas como refuerzo en elemento de concreto armado, por su alta adherencia con el concreto debido a que cuenta con corrugas o resaltes tipo Hight-Bond`, icono: icono_barras, logo: barras},

        {id: '17', subtitulo: 'METALYCK', titulo: 'ALAMBRE RECOCIDO', descripcion: `Alambres lisos de acero de bajo carbono laminados y/o trefilado, sometido a tratamiento térmico de recocido para aumentar su ductilidad, usados en la construcción civil en el armado de estructuras y amarre de encofrados.`, icono: icono_alambre, logo: alambre},

        {id: '26', subtitulo: 'ACEROS AREQUIPA', titulo: 'CLAVO DE ALBAÑILERÍA', descripcion: `El acero nace de la fusión de diferentes cargas metálicas, con contenido de hierro, ferroaleaciones y carbono, las cuales determinan su estructura molecular pero este proceso no es tan simple como parece. Para conocerlo, explicaremos el proceso de producción de Corporación Aceros Arequipa, empresa peruana líder en la fabricación y comercialización de productos de acero en el Perú, el cual cuenta con dos sedes productivas.`, icono: icono_clavos, logo: clavos},

        {id: '29', subtitulo: 'TREAMPERÚ', titulo: 'CLAVO DE ALBAÑILERÍA', descripcion: `En Tream Perú nos caracterizamos por ofrecer productos fabricados bajo estándares de calidad que nos diferencian de la competencia y nos permiten responder a las necesidades del mercado.
        Los clavos se dividen según sea el sector, Tream Perú fabrica clavos destinados a 4 sectores específicos: albañil, carpintero, frutero y minero.`, icono: icono_clavos_1, logo: clavos_1},

        {id: '23', subtitulo: 'PIRAMIDE', titulo: 'LADRILLOS', descripcion: `Los ladrillos se utilizan en construcción para fachadas y particiones. Se utiliza principalmente para construir muros o tabiques. Aunque se pueden colocar a hueso, lo habitual es que se reciban con mortero.`, icono: icono_ladrillos, logo: ladrillos},

        {id: '31', subtitulo: 'SAGITARIO', titulo: 'LADRILLOS', descripcion: `La implementación de los ladrillos es lo último en maquinaria totalmente automatizada, lo que nos permite no sólo mejorar la fabricación de productos con arcilla microcompacta, de altísima durabilidad, sino también incursionar en la elaboración de materiales bajo patrones europeos de calidad.`, icono: icono_ladrillos_1, logo: ladrillos_1},

        {id: '21', subtitulo: 'INKA', titulo: 'CEMENTO', descripcion: `El cemento es un material de construcción esencial; de hecho, es el más utilizado en el mundo. La mayoría de las construcciones lo emplean en, por lo menos, una de sus etapas: cimientos, suelos, dinteles, muros, paredes o techos.`, icono: icono_cemento, logo: cemento},

        {id: '22', subtitulo: 'UNACEM', titulo: 'CEMENTO', descripcion: `Garantizamos la ejecución y sostenibilidad de nuestras operaciones con los más altos estándares de calidad, protección de nuestras instalaciones, desempeño ambiental, y de salud y seguridad en el trabajo a través de nuestro Sistema Integrado de Gestión.`, icono: icono_cemento_1, logo: cemento_1},

        {id: '16', subtitulo: 'ETSAPERÚ', titulo: 'PLANCHAS TECNOPOR', descripcion: `El Tecnopor es utilizado en el sector de las obras civiles y construcción,
        en techos y paredes para el aislamiento térmico y acústico.`, icono: icono_planchas, logo: tecnopor},

        {id: '19', subtitulo: 'MAJESTAD', titulo: 'SELLADOR', descripcion: `Puede utilizarse para el pintado de cielos rasos, cercos perimétricos, jardines, y como 
        señalización en postesEl temple es uno de los productos más utilizado tradicionalmente para pintar paredes. Hasta la aparición de las modernas pinturas plásticas, era el material más cómodo y barato de utilizar.`, icono: icono_sellado, logo: sellador},

        {id: '12', subtitulo: 'NORTON', titulo: 'DISCOS CORTADORES', descripcion: 'Los discos NORTON son productos abrasivos de diferentes tamaños, granulometrías y formatos; indicados para operaciones profesionales e industriales sobre materiales como fierro, acero, acero inoxidable, madera, concreto, piedras, vidrios, entre otros.', icono: icono_cortador, logo: cortadora},
        {id: '13', subtitulo: 'BRIKER', titulo: 'DISCOS CORTADORES', descripcion: `Para los discos abrasivos BRIKER empleamos rigurosos procesos de calidad en cada herramienta para asegurar su funcionamiento y la integridad física de cada uno de nuestros usuarios.`, icono: icono_cortador_1, logo: cortadora_1},

        {id: '24', subtitulo: 'COMFISA', titulo: 'GUANTES', descripcion: `Guante reforzador de nitrilo en la palma para proteger contra cortes leves. De fácil manipulación y flexible. Ajuste elástico para la muñeca.`, icono: icono_guantes, logo: guantes},

        {id: '14', subtitulo: 'ASA', titulo: 'LIJAS', descripcion: `Las lijas suelen usarse para dejar lisas las paredes, previo al pintado. Las lijas
        también se utilizan en carpintería, para el acabado de diferentes piezas.`, icono: icono_lija, logo: lijas},

        {id: '25', subtitulo: 'TIGRE', titulo: 'TUBOS Y CONEXIONES', descripcion: `Nuestros productos operan en los segmentos de hidráulica, eléctrica, drenaje, accesorios sanitarios, infraestructura, industria, riego, herramientas de pintura, metales sanitarios y en soluciones para aguas y efluentes en el tratamiento de reutilización de aguas.`, icono: icono_tubo, logo: tubos}
    ]

    return (
        <div style={{background: 'white', width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional}}>
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
            <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, paddingBottom: 57 / proporcional}}>
                <div className='d-flex' style={{width: '100%', marginBottom: 34 / proporcional, height: 'auto'}}>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[0].id} titulo={lista_proveedores[0].titulo} subtitulo={lista_proveedores[0].subtitulo} descripcion={lista_proveedores[0].descripcion}  icono={lista_proveedores[0].icono} logo={lista_proveedores[0].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[1].id} titulo={lista_proveedores[1].titulo} subtitulo={lista_proveedores[1].subtitulo} descripcion={lista_proveedores[1].descripcion}  icono={lista_proveedores[1].icono} logo={lista_proveedores[1].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[2].id} titulo={lista_proveedores[2].titulo} subtitulo={lista_proveedores[2].subtitulo} descripcion={lista_proveedores[2].descripcion}  icono={lista_proveedores[2].icono} logo={lista_proveedores[2].logo}/>
                </div>
                <div className='d-flex' style={{width: '100%', marginBottom: 34 / proporcional, height: 'auto'}}>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[3].id} titulo={lista_proveedores[3].titulo} subtitulo={lista_proveedores[3].subtitulo} descripcion={lista_proveedores[3].descripcion}  icono={lista_proveedores[3].icono} logo={lista_proveedores[3].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[4].id} titulo={lista_proveedores[4].titulo} subtitulo={lista_proveedores[4].subtitulo} descripcion={lista_proveedores[4].descripcion}  icono={lista_proveedores[4].icono} logo={lista_proveedores[4].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[5].id} titulo={lista_proveedores[5].titulo} subtitulo={lista_proveedores[5].subtitulo} descripcion={lista_proveedores[5].descripcion}  icono={lista_proveedores[5].icono} logo={lista_proveedores[5].logo}/>
                </div>
                <div className='d-flex' style={{width: '100%', marginBottom: 34 / proporcional, height: 'auto'}}>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[6].id} titulo={lista_proveedores[6].titulo} subtitulo={lista_proveedores[6].subtitulo} descripcion={lista_proveedores[6].descripcion}  icono={lista_proveedores[6].icono} logo={lista_proveedores[6].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[7].id} titulo={lista_proveedores[7].titulo} subtitulo={lista_proveedores[7].subtitulo} descripcion={lista_proveedores[7].descripcion}  icono={lista_proveedores[7].icono} logo={lista_proveedores[7].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[8].id} titulo={lista_proveedores[8].titulo} subtitulo={lista_proveedores[8].subtitulo} descripcion={lista_proveedores[8].descripcion}  icono={lista_proveedores[8].icono} logo={lista_proveedores[8].logo}/>
                </div>
                <div className='d-flex' style={{width: '100%', marginBottom: 34 / proporcional, height: 'auto'}}>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[9].id} titulo={lista_proveedores[9].titulo} subtitulo={lista_proveedores[9].subtitulo} descripcion={lista_proveedores[9].descripcion}  icono={lista_proveedores[9].icono} logo={lista_proveedores[9].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[10].id} titulo={lista_proveedores[10].titulo} subtitulo={lista_proveedores[10].subtitulo} descripcion={lista_proveedores[10].descripcion}  icono={lista_proveedores[10].icono} logo={lista_proveedores[10].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[11].id} titulo={lista_proveedores[11].titulo} subtitulo={lista_proveedores[11].subtitulo} descripcion={lista_proveedores[11].descripcion}  icono={lista_proveedores[11].icono} logo={lista_proveedores[11].logo}/>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', marginBottom: 34 / proporcional, height: 'auto'}}>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[12].id} titulo={lista_proveedores[12].titulo} subtitulo={lista_proveedores[12].subtitulo} descripcion={lista_proveedores[12].descripcion}  icono={lista_proveedores[12].icono} logo={lista_proveedores[12].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[13].id} titulo={lista_proveedores[13].titulo} subtitulo={lista_proveedores[13].subtitulo} descripcion={lista_proveedores[13].descripcion}  icono={lista_proveedores[13].icono} logo={lista_proveedores[13].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[14].id} titulo={lista_proveedores[14].titulo} subtitulo={lista_proveedores[14].subtitulo} descripcion={lista_proveedores[14].descripcion}  icono={lista_proveedores[14].icono} logo={lista_proveedores[14].logo}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', marginBottom: 34 / proporcional, height: 'auto'}}>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[15].id} titulo={lista_proveedores[15].titulo} subtitulo={lista_proveedores[15].subtitulo} descripcion={lista_proveedores[15].descripcion}  icono={lista_proveedores[15].icono} logo={lista_proveedores[15].logo}/>
                    <CardProveedor proporcional={proporcional} id={lista_proveedores[16].id} titulo={lista_proveedores[16].titulo} subtitulo={lista_proveedores[16].subtitulo} descripcion={lista_proveedores[16].descripcion}  icono={lista_proveedores[16].icono} logo={lista_proveedores[16].logo}/>
                </div>
            </div>
        </div>
    )
}