import React from 'react'

import CardProductoCell from './card/productocell.jsx'

export default function ListaProductosCell({proporcional, productos}) {

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            {
                productos && productos.length > 0 ? (
                    productos.map ((producto, index) => {
                        return (
                            <CardProductoCell proporcional={proporcional} producto={producto}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}