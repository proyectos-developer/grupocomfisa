import { constantes } from "./constantes";

export const correoConstants = (data = {}, reset = false, id = 0, usuario=0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        forgot_password: {
            path: `correo/nuevo/password`,
            stateType: 'forgot_password',
            reset: reset,
            data: data
        },
        send_correo_cotizacion: {
            path: `correo/nueva/cotizacion/${id}/${usuario}`,
            stateType: 'send_correo_cotizacion',
            data: data,
            reset: reset
        },
        send_correo_web: {
            path: `correo/mensaje/web`,
            stateType: 'send_correo_web',
            data: data,
            reset: reset
        }
    }
}