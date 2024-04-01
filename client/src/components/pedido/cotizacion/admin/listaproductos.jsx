import React from 'react'

import CardProducto from './card/producto.jsx'

export default function ListaProductos({proporcional, productos}) {

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            {
                productos && productos.length > 0 ? (
                    productos.map ((producto, index) => {
                        return (
                            <CardProducto proporcional={proporcional} producto={producto}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}