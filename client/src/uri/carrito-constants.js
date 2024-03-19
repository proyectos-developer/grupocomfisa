import { constantes } from "./constantes"

export const carritoConstants = (id = 0, shop_id = 0, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_cotizar: {
            path: `cotizar`,
            stateType: 'new_cotizar',
            reset: reset,
            data: data
        },
        update_cantidad_producto: {
            path: `cotizar/${shop_id}/${id}`,
            stateType: 'update_cantidad_producto',
            reset: reset,
            data: data
        },
        update_comentarios_producto: {
            path: `cotizar/comentarios/${shop_id}/${id}`,
            stateType: 'update_comentarios_producto',
            reset: reset,
            data: data
        },
        update_usuario_cotizar: {
            path: `usuario/cotizar/${shop_id}`,
            stateType: 'update_usuario_cotizar',
            reset: reset,
            data: data
        },
        get_lista_cotizar: {
            path: `cotizar/${shop_id}`,
            stateType: 'get_lista_cotizar',
            reset: reset
        },
        get_cotizaciones_usuario:{
            path: `cotizaciones/${id}`,
            stateType: 'get_cotizaciones_usuario',
            reset: reset
        },
        delete_producto_cotizar: {
            path: `delete/producto/cotizar/${shop_id}/${id}`,
            stateType: 'delete_producto_cotizar',
            reset: reset
        },
        delete_lista_cotizar: {
            path: `delete/cotizar/${shop_id}/${id}`,
            stateType: 'delete_lista_cotizar',
            reset: reset
        }, 
        get_productos_cotizacion_usuario : {
            path: `cotizaciones/productos/detalles/${shop_id}`,
            stateType: 'get_productos_cotizacion_usuario',
            reset: reset
        },
        update_estado_cotizacion: {
            patch: `cotizacion/estado/${shop_id}`,
            stateType: 'update_estado_cotizacion',
            data: data,
            reset: reset
        }
    }
}