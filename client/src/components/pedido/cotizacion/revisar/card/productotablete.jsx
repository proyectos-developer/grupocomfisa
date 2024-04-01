import React from 'react'

export default function ProductoTablete({proporcional, producto}) {

    return (
        <div className='shadow rounded' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 100 / proporcional, padding: 10 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '10%', height: 80 / proporcional, borderRight: '1px solid #efefef'}}>
                    <img src={producto.foto_uno} style={{width: 80 / proporcional, height: 80 / proporcional}}/>
                </div>
                <div className='' style={{width: '25%', height: 80 / proporcional, borderRight: '1px solid #efefef', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600}}>
                        {producto.proveedor} 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        {producto.producto} 
                    </p>
                </div>
                <div className='' style={{width: '10%', height: 80 / proporcional, borderRight: '1px solid #efefef', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600, textAlign: 'center'}}>
                        Cantidad:
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                        {producto.cantidad} 
                    </p>
                </div>
                <div className='' style={{width: '65%', height: 80 / proporcional, paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600}}>
                        Comentarios:
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        {producto.comentarios} 
                    </p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 100 / proporcional, padding: 10 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '20%', height: 80 / proporcional, borderRight: '1px solid #efefef'}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600}}>
                        Precio 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        S/.{producto.precio} 
                    </p>
                </div>
                <div className='' style={{width: '90%', height: 80 / proporcional, borderRight: '1px solid #efefef', paddingLeft: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#007BA7', fontWeight: 600}}>
                        Observaciones 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        {producto.observaciones} 
                    </p>
                </div>
            </div>
        </div>
    )
}