import { filtrostypes } from "../actions/filtrosactions";

const initialState = {
    filtro_productos_search_order_amount:   {pagina: '', filtro: 0, search: 0, order_by: 0, order: 0, begin: 0, cantidad: 9},
    limpiar_filtros: {}
}

const filtrosreducer = (state = initialState, action) => {
    if (action.type === filtrostypes.SET_FILTRO_PRODUCTOS_SEARCH_ORDER_AMOUNT){
        const filtro_productos_search_order_amount = action.filtro_productos_search_order_amount
        return {
            ... state,
            filtro_productos_search_order_amount
        }
    }else if (action.type === filtrostypes.SET_LIMPIAR_FILTROS){
        const limpiar_filtros = action.limpiar_filtros
        return {
            ... state,
            limpiar_filtros
        }
    }
    return state
}

export default filtrosreducer