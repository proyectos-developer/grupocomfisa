import { constantes } from "./constantes";

export const favoritosConstants = (data = {}, reset = false, id = 0, usuario = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_favorito: {
            path: `favoritos`,
            stateType: 'new_favorito',
            reset: reset,
            data: data
        },
        delete_favorito: {
            path: `delete/favoritos/${id}/${usuario}`,
            stateType: 'delete_favorito',
            data: data,
            reset: reset
        },
        get_favoritos: {
            path: `favoritos/${usuario}`,
            stateType: 'get_favoritos',
            reset: reset
        },
    }
}