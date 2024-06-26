import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { constantes } from "../../uri/constantes"

const baseurl = `${constantes().url_principal[0].url}`
let stateType = ''

export const correodata = createAsyncThunk ('', async (params) => {
    stateType = params.stateType
    switch (stateType){
        case 'forgot_password':
        case 'send_correo_cotizacion':
        case 'send_correo_web': 
        case 'send_correo_revisar_cotizacion':
        case 'send_correo_respuesta_cotizacion':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    const response = await axios.post (`${baseurl}/${params.path}`, params.data)
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        default: return null
    }
})

const initialState = (type) => {
    return {
        [type]: [],
        loading: false,
        finishWithErrors: false,
        errorMessage: 'Hemos tenido problemas solicitando la información'
    }
}

const dataCorreo = createSlice ({
    name: 'fetch',
    initialState: initialState (stateType),
    extraReducers: (builder) => {
        builder.addCase (correodata.pending, (state) => {
            state.loading = true
        }),
        builder.addCase (correodata.fulfilled, (state, action) => {
            state.loading = false
            state.finishWithErrors = false
            state[stateType] = action.payload
        }),
        builder.addCase (correodata.rejected, (state) => {
            state.loading = false
            state.finishWithErrors = true
        })
    }
})

export default dataCorreo.reducer