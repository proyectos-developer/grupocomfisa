import React from 'react'

import CardProductoTablet from './card/productotablet.jsx'

export default function ListaProductosTablet({proporcional, productos}) {

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            {
                productos && productos.length > 0 ? (
                    productos.map ((producto, index) => {
                        return (
                            <CardProductoTablet proporcional={proporcional} producto={producto}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}