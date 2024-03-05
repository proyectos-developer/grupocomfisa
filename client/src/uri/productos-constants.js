import { constantes } from "./constantes"

export const productosConstants = (id = 1, search = '', filtro = '', order_by = '', order = '', begin = 0, cantidad = 9, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_productos_cantidad: {
            path: `productos/${begin}/${cantidad}`,
            stateType: 'get_productos_cantidad',
            data: data,
            reset: reset
        }, 
        get_productos_relacionados: {
            path: `productos/${id}/${begin}/${cantidad}`,
            stateType: 'get_productos_relacionados',
            reset: reset
        },
        get_productos_search_filtro_order: {
            path: `productos/search/${search}/filtro/${filtro}/order/${order_by}/${order}/${begin}/${cantidad}`,
            stateType: 'get_productos_search_filtro_order',
            reset: reset
        },
        get_productos_search_filtro_order_tienda: {
            path: `productos/search/${search}/filtro/${filtro}/order/${order_by}/${order}/${begin}/${cantidad}`,
            stateType: 'get_productos_search_filtro_order_tienda',
            reset: reset
        },
        get_prouctos_proveedor: {
            path: `productos/${id}`,
            stateType: 'get_prouctos_proveedor',
            reset: reset
        },
        get_producto: {
            path: `producto/${id}`,
            stateType: 'get_producto',
            reset: reset
        },
        get_proveedor_detalles_productos: {
            path: `proveedor/detalles/productos/${id}`,
            stateType: 'get_proveedor_detalles_productos',
            reset: reset
        },
        get_productos_medida: {
            path: `producto/detalles/medida/${id}`,
            stateType: 'get_productos_medida',
            reset: reset
        }
    }
}