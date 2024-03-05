import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import datareducer from './redux/reducers/datareducer'
import filtrosreducer from './redux/reducers/filtrosreducer'
import productosdata from './redux/slice/productosdata'
import proveedoresdata from './redux/slice/proveedoresdata'
import begindata from './redux/slice/begindata'
import carritodata from './redux/slice/carritodata'
import clientesdata from './redux/slice/clientesdata'
import favoritosdata from './redux/slice/favoritosdata'
import correodata from './redux/slice/correodata'

const store = configureStore({
    reducer: ({
      datareducer: datareducer,
      filtros: filtrosreducer,
      begin_data: begindata,
      productos_data: productosdata,
      proveedores_data: proveedoresdata,
      carrito_data: carritodata,
      clientes_data: clientesdata,
      favoritos_data: favoritosdata,
      correo_data: correodata
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         immutableCheck: false,
         serializableCheck: false,
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
