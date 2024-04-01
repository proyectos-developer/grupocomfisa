import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/home/panel.jsx'
import PanelHomeTablet from './components/home/paneltablet.jsx'
import PanelHomeCell from './components/home/panelcell.jsx'

import DashboardHome from './components/home/dashboard.jsx'
import DashboardHomeTablet from './components/home/dashboardtablet.jsx'
import DashboardHomeCell from './components/home/dashboardcell.jsx'

import Signin from './components/cuenta/signin.jsx'
import SigninTablet from './components/cuenta/signintablet.jsx'
import SigninCell from './components/cuenta/signincell.jsx'

import OlvidoPassword from './components/cuenta/olvidopassword.jsx'
import OlvidoPasswordTablet from './components/cuenta/olvidopasswordtablet.jsx'
import OlvidoPasswordCell from './components/cuenta/olvidopasswordcell.jsx'

import ConfirmacionEnvioLink from './components/cuenta/confirmacionlink.jsx'
import ConfirmacionEnvioLinkTablet from './components/cuenta/confirmacionlinktablet.jsx'
import ConfirmacionEnvioLinkCell from './components/cuenta/confirmacionlinkcell.jsx'

import PasswordActualizado from './components/cuenta/passwordactualizado.jsx'
import PasswordActualizadoTablet from './components/cuenta/passwordactualizadotablet.jsx'
import PasswordActualizadoCell from './components/cuenta/passwordactualizadocell.jsx'

import NuevaContraseña from './components/cuenta/nuevacontraseña.jsx'
import NuevaContraseñaTablet from './components/cuenta/nuevacontraseñatablet.jsx'
import NuevaContraseñaCell from './components/cuenta/nuevacontraseñacell.jsx'

import Register from './components/cuenta/register.jsx'
import RegisterTablet from './components/cuenta/registertablet.jsx'
import RegisterCell from './components/cuenta/registercell.jsx'

import PerfilCuenta from './components/cuenta/profile/perfil.jsx'
import PerfilCuentaTablet from './components/cuenta/profile/perfiltablet.jsx'
import PerfilCuentaCell from './components/cuenta/profile/perfilcell.jsx'

import CotizacionesCuenta from './components/cuenta/cotizaciones/lista.jsx'
import CotizacionesCuentaTablet from './components/cuenta/cotizaciones/listatablet.jsx'
import CotizacionesCuentaCell from './components/cuenta/cotizaciones/listacell.jsx'

import DetallesCotizacionCuenta from './components/cuenta/cotizaciones/detalles.jsx'
import DetallesCotizacionCuentaTablet from './components/cuenta/cotizaciones/detallestablet.jsx'
import DetallesCotizacionCuentaCell from './components/cuenta/cotizaciones/detallescell.jsx'

import FavoritosCuenta from './components/cuenta/favoritos/lista.jsx'
import FavoritosCuentaTablet from './components/cuenta/favoritos/listatablet.jsx'
import FavoritosCuentaCell from './components/cuenta/favoritos/listacell.jsx'

import SobreNosotros from './components/nosotros/dashboard.jsx'
import SobreNosotrosTablet from './components/nosotros/dashboardtablet.jsx'
import SobreNosotrosCell from './components/nosotros/dashboardcell.jsx'

import Tienda from './components/tienda/dashboard.jsx'
import TiendaTablet from './components/tienda/dashboardtablet.jsx'
import TiendaCell from './components/tienda/dashboardcell.jsx'

import CarritoCotizar from './components/carrito/dashboard.jsx'
import CarritoCotizarTablet from './components/carrito/dashboardtablet.jsx'
import CarritoCotizarCell from './components/carrito/dashboardcell.jsx'

import ConfirmacionCotizacion from './components/carrito/confirmacion.jsx'
import ConfirmacionCotizacionTablet from './components/carrito/confirmaciontablet.jsx'
import ConfirmacionCotizacionCell from './components/carrito/confirmacioncell.jsx'

import EnviadaCotizacion from './components/carrito/enviada.jsx'
import EnviadaCotizacionTablet from './components/carrito/enviadatablet.jsx'
import EnviadaCotizacionCell from './components/carrito/enviadacell.jsx'

import DetallesProveedor from './components/proveedor/productos.jsx'
import DetallesProveedorTablet from './components/proveedor/productostablet.jsx'
import DetallesProveedorCell from './components/proveedor/productoscell.jsx'

import Contacto from './components/contacto/dashboard.jsx'
import ContactoTablet from './components/contacto/dashboardtablet.jsx'
import ContactoCell from './components/contacto/dashboardcell.jsx'

import RespuestaCotizacion from './components/cotizacion/respuesta.jsx'
import RespuestaCotizacionTablet from './components/cotizacion/respuestatablet.jsx'
import RespuestaCotizacionCell from './components/cotizacion/respuestacell.jsx'

import RespuestaCotizacionCancelada from './components/cotizacion/cancelada.jsx'
import RespuestaCotizacionCanceladaTablet from './components/cotizacion/canceladatablet.jsx'
import RespuestaCotizacionCanceladaCell from './components/cotizacion/canceladacell.jsx'

import RespuestaCotizacionAceptada from './components/cotizacion/aceptada.jsx'
import RespuestaCotizacionAceptadaTablet from './components/cotizacion/aceptadatablet.jsx'
import RespuestaCotizacionAceptadaCell from './components/cotizacion/aceptadacell.jsx'

import CotizacionParaAdmin from './components/pedido/cotizacion/admin/begin.jsx'
import CotizacionParaAdminTablet from './components/pedido/cotizacion/admin/begintablet.jsx'
import CotizacionParaAdminCell from './components/pedido/cotizacion/admin/begincell.jsx'

import PedidoEnviado from './components/pedido/cotizacion/enviado/begin.jsx'
import PedidoEnviadoTablet from './components/pedido/cotizacion/enviado/begintablet.jsx'
import PedidoEnviadoCell from './components/pedido/cotizacion/enviado/begincell.jsx'

import CotizacionDelCliente from './components/pedido/cotizacion/cliente/begin.jsx'
import CotizacionDelClienteTablet from './components/pedido/cotizacion/cliente/begintablet.jsx'
import CotizacionDelClienteCell from './components/pedido/cotizacion/cliente/begincell.jsx'

import RevisarCotizacion from './components/pedido/cotizacion/revisar/begin.jsx'
import RevisarCotizacionTablet from './components/pedido/cotizacion/revisar/begintablet.jsx'
import RevisarCotizacionCell from './components/pedido/cotizacion/revisar/begincell.jsx'

import RespuestaCotizacionCliente from './components/pedido/cotizacion/respuesta/begin.jsx'
import RespuestaCotizacionClienteTablet from './components/pedido/cotizacion/respuesta/begintablet.jsx'
import RespuestaCotizacionClienteCell from './components/pedido/cotizacion/respuesta/begincell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <PanelHomeCell   proporcional={499 / width}/> : 
                                     width < 991 ? <PanelHomeTablet proporcional={991 / width}/> : 
                                                   <PanelHome       proporcional={1920 / width} />}>

                <Route index element={width < 500 ? <DashboardHomeCell   proporcional={499 / width}/> :
                                      width < 991 ? <DashboardHomeTablet proporcional={991 / width}/> :
                                                    <DashboardHome       proporcional={1920 / width} />}/>
                
                <Route path='signin' element={width < 500 ? <SigninCell   proporcional={499 / width}/> :
                                              width < 991 ? <SigninTablet proporcional={991 / width}/> :
                                                            <Signin       proporcional={1920 / width} />}/>
                                                             
                <Route path='registro' element={width < 500 ? <RegisterCell   proporcional={499 / width}/> :
                                                width < 991 ? <RegisterTablet proporcional={991 / width}/> :
                                                              <Register       proporcional={1920 / width} />}/>
                                                             
                <Route path='olvidaste-password' element={width < 500 ? <OlvidoPasswordCell   proporcional={499 / width}/> :
                                                          width < 991 ? <OlvidoPasswordTablet proporcional={991 / width}/> :
                                                                        <OlvidoPassword       proporcional={1920 / width} />}/>
                                                             
                <Route path='olvidaste-password/confirmacion' element={width < 500 ? <ConfirmacionEnvioLinkCell   proporcional={499 / width}/> :
                                                                      width < 991 ? <ConfirmacionEnvioLinkTablet proporcional={991 / width}/> :
                                                                                    <ConfirmacionEnvioLink       proporcional={1920 / width} />}/>
                                                                                    
                <Route path='cambio-password/actualizado' element={width < 500 ? <PasswordActualizadoCell   proporcional={499 / width}/> :
                                                                   width < 991 ? <PasswordActualizadoTablet proporcional={991 / width}/> :
                                                                                 <PasswordActualizado       proporcional={1920 / width} />}/>
                                                                                    
                <Route path='olvidaste-password/nuevo-password/:usuario' element={width < 500 ? <NuevaContraseñaCell   proporcional={499 / width}/> :
                                                                               width < 991 ? <NuevaContraseñaTablet proporcional={991 / width}/> :
                                                                                             <NuevaContraseña       proporcional={1920 / width} />}/>
                                                    
                <Route path='sobre-nosotros' element={width < 500 ? <SobreNosotrosCell   proporcional={499 / width}/> :
                                                      width < 991 ? <SobreNosotrosTablet proporcional={991 / width}/> :
                                                                    <SobreNosotros       proporcional={1920 / width} />}/>
                                                    
                <Route path='proveedor/:proveedor' element={width < 500 ? <DetallesProveedorCell   proporcional={499 / width}/> :
                                                            width < 991 ? <DetallesProveedorTablet proporcional={991 / width}/> :
                                                                          <DetallesProveedor       proporcional={1920 / width} />}/>
 
                <Route path='tienda' element={width < 500 ? <TiendaCell   proporcional={499 / width}/> :
                                              width < 991 ? <TiendaTablet proporcional={991 / width}/> :
                                                            <Tienda       proporcional={1920 / width} />}/>
                                                            
                <Route path='lista-cotizar' element={width < 500 ? <CarritoCotizarCell   proporcional={499 / width}/> :
                                                     width < 991 ? <CarritoCotizarTablet proporcional={991 / width}/> :
                                                                   <CarritoCotizar       proporcional={1920 / width} />}/>
                                                                   
                <Route path='lista-cotizar/confirmar' element={width < 500 ? <ConfirmacionCotizacionCell   proporcional={499 / width}/> :
                                                               width < 991 ? <ConfirmacionCotizacionTablet proporcional={991 / width}/> :
                                                                             <ConfirmacionCotizacion       proporcional={1920 / width} />}/>
                                                                             
                <Route path='lista-cotizar/enviada' element={width < 500 ? <EnviadaCotizacionCell   proporcional={499 / width}/> :
                                                             width < 991 ? <EnviadaCotizacionTablet proporcional={991 / width}/> :
                                                                           <EnviadaCotizacion       proporcional={1920 / width} />}/>
                                                            
                <Route path='contacto' element={width < 500 ? <ContactoCell   proporcional={499 / width}/> :
                                                width < 991 ? <ContactoTablet proporcional={991 / width}/> :
                                                              <Contacto       proporcional={1920 / width} />}/>
                                                             
                <Route path='cuenta/perfil' element={width < 500 ? <PerfilCuentaCell   proporcional={499 / width}/> :
                                                     width < 991 ? <PerfilCuentaTablet proporcional={991 / width}/> :
                                                                   <PerfilCuenta       proporcional={1920 / width} />}/>
                                                                   
                <Route path='cuenta/cotizaciones' element={width < 500 ? <CotizacionesCuentaCell   proporcional={499 / width}/> :
                                                           width < 991 ? <CotizacionesCuentaTablet proporcional={991 / width}/> :
                                                                         <CotizacionesCuenta       proporcional={1920 / width} />}/>
                                                                         
                                                                   
                <Route path='cuenta/cotizacion/detalles/:id_cotizacion' element={width < 500 ? <DetallesCotizacionCuentaCell   proporcional={499 / width}/> :
                                                                                 width < 991 ? <DetallesCotizacionCuentaTablet proporcional={991 / width}/> :
                                                                                               <DetallesCotizacionCuenta       proporcional={1920 / width} />}/>
                                                                   
                <Route path='cuenta/favoritos' element={width < 500 ? <FavoritosCuentaCell   proporcional={499 / width}/> :
                                                        width < 991 ? <FavoritosCuentaTablet proporcional={991 / width}/> :
                                                                      <FavoritosCuenta       proporcional={1920 / width} />}/>
                                                                      
                <Route path='respuesta/cotizacion/:shop_id' element={width < 500 ? <RespuestaCotizacionCell   proporcional={499 / width}/> :
                                                                     width < 991 ? <RespuestaCotizacionTablet proporcional={991 / width}/> :
                                                                                   <RespuestaCotizacion       proporcional={1920 / width} />}/>
                                                                      
                <Route path='cotizacion/respuesta/cancelada' element={width < 500 ? <RespuestaCotizacionCanceladaCell   proporcional={499 / width}/> :
                                                                      width < 991 ? <RespuestaCotizacionCanceladaTablet proporcional={991 / width}/> :
                                                                                    <RespuestaCotizacionCancelada       proporcional={1920 / width} />}/>
                                                                                   
                <Route path='cotizacion/respuesta/aceptada' element={width < 500 ? <RespuestaCotizacionAceptadaCell   proporcional={499 / width}/> :
                                                                     width < 991 ? <RespuestaCotizacionAceptadaTablet proporcional={991 / width}/> :
                                                                                   <RespuestaCotizacionAceptada       proporcional={1920 / width} />}/>                                                           
                                                                                   
            </Route>

            <Route path='/pedido/cotizacion/admin/:shop_id' element={width < 500 ? <CotizacionParaAdminCell   proporcional={499 / width}/> :
                                                                     width < 991 ? <CotizacionParaAdminTablet proporcional={991 / width}/> :
                                                                                   <CotizacionParaAdmin       proporcional={1920 / width} />}/>

            <Route path='/pedido/cotizacion/enviada/:shop_id' element={width < 500 ? <PedidoEnviadoCell   proporcional={499 / width}/> :
                                                                       width < 991 ? <PedidoEnviadoTablet proporcional={991 / width}/> :
                                                                                     <PedidoEnviado       proporcional={1920 / width} />}/>      
 
            <Route path='/pedido/cotizacion/cliente/:shop_id' element={width < 500 ? <CotizacionDelClienteCell   proporcional={499 / width}/> :
                                                                       width < 991 ? <CotizacionDelClienteTablet proporcional={991 / width}/> :
                                                                                     <CotizacionDelCliente       proporcional={1920 / width} />}/>    

            <Route path='/pedido/cotizacion/revisar/:shop_id' element={width < 500 ? <RevisarCotizacionCell   proporcional={499 / width}/> :
                                                                       width < 991 ? <RevisarCotizacionTablet proporcional={991 / width}/> :
                                                                                     <RevisarCotizacion       proporcional={1920 / width} />}/>  
                                                                                       
            <Route path='/respuesta/cotizacion/cliente/:shop_id' element={width < 500 ? <RespuestaCotizacionClienteCell   proporcional={499 / width}/> :
                                                                          width < 991 ? <RespuestaCotizacionClienteTablet proporcional={991 / width}/> :
                                                                                        <RespuestaCotizacionCliente       proporcional={1920 / width} />}/>      
        </Routes>
    </BrowserRouter>
  )
}

export default App
