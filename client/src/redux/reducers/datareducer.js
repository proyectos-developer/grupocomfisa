import { datatypes } from "../actions/dataactions";

const initialState = {
    open_menu_carrito: false,
    producto_data: {},
    productos_proveedor: {productos: [], total_productos: 0, proveedor: {}},
    lista_carrito_cotizacion: [],
    data_cliente: {},
    authenticated: false,
    open_warning_login: {open: false, warning: ''},
    lista_productos_cotizacion: []
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_OPEN_MENU_CARRITO){
        const open_menu_carrito = action.open_menu_carrito
        return {
            ... state,
            open_menu_carrito
        }
    }else if (action.type === datatypes.SET_PRODUCTO_DATA){
        const producto_data = action.producto_data
        return {
            ... state,
            producto_data
        }
    }else if (action.type === datatypes.SET_PRODUCTOS_PROVEEDOR){
        const productos_proveedor = action.productos_proveedor
        return {
            ... state,
            productos_proveedor
        }
    }else if (action.type === datatypes.SET_LISTA_CARRITO_COTIZACION){
        const lista_carrito_cotizacion = action.lista_carrito_cotizacion
        return {
            ... state,
            lista_carrito_cotizacion
        }
    }else if (action.type === datatypes.SET_DATA_CLIENTE){
        const data_cliente = action.data_cliente
        return {
            ... state,
            data_cliente
        }
    }else if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else if (action.type === datatypes.SET_OPEN_WARNING_LOGIN){
        const open_warning_login = action.open_warning_login
        return {
            ... state,
            open_warning_login
        }
    }else if (action.type === datatypes.SET_LISTA_PRODUCTOS_COTIZACION){
        const lista_productos_cotizacion = action.lista_productos_cotizacion
        return {
            ... state,
            lista_productos_cotizacion
        }
    }
    return state
}

export default datareducer