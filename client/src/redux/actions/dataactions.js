export const datatypes = {
    SET_OPEN_MENU_CARRITO: 'SET_OPEN_MENU_CARRITO',
    SET_PRODUCTO_DATA: 'SET_PRODUCTO_DATA',
    SET_PRODUCTOS_PROVEEDOR: 'SET_PRODUCTOS_PROVEEDOR',
    SET_LISTA_CARRITO_COTIZACION: 'SET_LISTA_CARRITO_COTIZACION',
    SET_DATA_CLIENTE: "SET_DATA_CLIENTE",
    SET_AUTHENTICATED: 'SET_AUTHENTICATED',
    SET_OPEN_WARNING_LOGIN: 'SET_OPEN_WARNING_LOGIN',
    SET_LISTA_PRODUCTOS_COTIZACION: 'SET_LISTA_PRODUCTOS_COTIZACION'
}

export const set_open_menu_carrito = open_menu_carrito => {
    return {
        open_menu_carrito,
        type: datatypes.SET_OPEN_MENU_CARRITO
    }
}

export const set_producto_data = producto_data => {
    return {
        producto_data,
        type: datatypes.SET_PRODUCTO_DATA
    }
}

export const set_productos_proveedor = productos_proveedor => {
    return {
        productos_proveedor,
        type: datatypes.SET_PRODUCTOS_PROVEEDOR
    }
}

export const set_lista_carrito_cotizacion = lista_carrito_cotizacion => {
    return {
        lista_carrito_cotizacion,
        type: datatypes.SET_LISTA_CARRITO_COTIZACION
    }
}

export const set_data_cliente = data_cliente => {
    return {
        data_cliente,
        type: datatypes.SET_DATA_CLIENTE
    }
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_warning_login = open_warning_login => {
    return {
        open_warning_login,
        type: datatypes.SET_OPEN_WARNING_LOGIN
    }
}

export const set_lista_productos_cotizacion = lista_productos_cotizacion => {
    return {
        lista_productos_cotizacion,
        type: datatypes.SET_LISTA_PRODUCTOS_COTIZACION
    }
}