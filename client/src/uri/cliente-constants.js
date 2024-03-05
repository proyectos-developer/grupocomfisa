import { constantes } from "./constantes"

export const clientesConstants = (id = 0, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_cliente: {
            path: `cliente`,
            stateType: 'new_cliente',
            reset: reset,
            data: data
        },
        update_cliente: {
            path: `cliente/${id}`,
            stateType: 'update_cliente',
            reset: reset,
            data: data
        },
        get_cliente: {
            path: `cliente/${id}`,
            stateType: 'get_cliente',
            reset: reset,
        }
    }
}