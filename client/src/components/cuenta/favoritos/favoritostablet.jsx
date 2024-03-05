import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {favoritosdata} from '../../../redux/slice/favoritosdata'
import { favoritosConstants } from '../../../uri/favoritos-constants'

import CardFavoritoTablet from './card/favoritotablet.jsx'

export default function Favoritos({proporcional}) {

    const dispatch = useDispatch()

    const [lista_favoritos, setListaFavoritos] = useState([])
    
    const {get_favoritos, delete_favorito} = useSelector(({favoritos_data}) => favoritos_data)

    useEffect(() => {
        dispatch(favoritosdata(favoritosConstants({}, false, 0, window.localStorage.getItem ('usuario')).get_favoritos))
    }, [])

    useEffect(() => {
        if (get_favoritos && get_favoritos.success === true && get_favoritos.favoritos){
            setListaFavoritos(get_favoritos.favoritos)
        }
    }, [get_favoritos])

    useEffect(() => {
        if (delete_favorito && delete_favorito.success === true && delete_favorito.favoritos){
            setListaFavoritos(delete_favorito.favoritos)
        }
    }, [delete_favorito])

    return (
        <div className='rounded' style={{width: 571 / proporcional, height: 'auto', border: '1px solid #384da7'}}>
            {
                lista_favoritos && lista_favoritos.length > 0 ? (
                    lista_favoritos.map ((favorito, index) => {
                        return (
                            <CardFavoritoTablet proporcional={proporcional} favorito={favorito} total={lista_favoritos.length - 1} index={index}/>
                        )
                    })
                ) : null
            }
        </div>
    )

}