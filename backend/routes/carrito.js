const express = require('express')
const router = express.Router()

const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.post ('/api/cotizar', async (req, res) => {
    const {id_producto, usuario, cantidad, comentarios, shop_id} = req.body
    try {
        const newLista = {id_producto, usuario, cantidad, comentarios, shop_id}
        const new_lista = await pool.query (`INSERT INTO carrito_cotizacion set ?`, [newLista])
        const lista_cotizar = await pool.query ('SELECT * FROM carrito_cotizacion WHERE shop_id = ?', [shop_id])
        
        return res.json ({
            cotizar: lista_cotizar,
            success: true
        })

    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.post ('/api/cotizar/:shop_id/:id_producto', async (req, res) => {
    const {shop_id, id_producto} = req.params
    const {cantidad} = req.body

    try {
        if (parseFloat(cantidad) === 0){
            await pool.query ('DELETE FROM carrito_cotizacion WHERE shop_id = ? AND id_producto = ?', [shop_id, id_producto])
            const lista_cotizar = await pool.query (`SELECT * FROM carrito_cotizacion WHERE shop_id = ?`, [shop_id])
            return res.json ({
                lista_cotizar: lista_cotizar,
                success: true
            })
        }else{
            const updateCarrito = {cantidad}
            await pool.query ('UPDATE carrito_cotizacion set ? WHERE shop_id = ? AND id_producto = ?', [updateCarrito, shop_id, id_producto])
            const lista_cotizar = await pool.query (`SELECT * FROM carrito_cotizacion WHERE shop_id = ?`, [shop_id])
            return res.json ({
                lista_cotizar: lista_cotizar,
                success: true
            })
        }
        
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.post ('/api/cotizar/comentarios/:shop_id/:id_producto', async (req, res) => {
    const {shop_id, id_producto} = req.params
    const {comentarios} = req.body

    try {
        const updateCarrito = {comentarios}
        await pool.query ('UPDATE carrito_cotizacion set ? WHERE shop_id = ? AND id_producto = ?', [updateCarrito, shop_id, id_producto])
        const lista_cotizar = await pool.query (`SELECT * FROM carrito_cotizacion WHERE shop_id = ?`, [shop_id])
        return res.json ({
            lista_cotizar: lista_cotizar,
            success: true
        })
    
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.post ('/api/cotizar/precio/observaciones/:shop_id/:id_producto', async (req, res) => {
    const {shop_id, id_producto} = req.params
    const {precio, observaciones, estado} = req.body

    try {
        const updateCarrito = {precio, observaciones, estado}
        await pool.query ('UPDATE carrito_cotizacion set ? WHERE shop_id = ? AND id_producto = ?', [updateCarrito, shop_id, id_producto])
        return res.json ({
            id_producto: id_producto,
            success: true
        })
    
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.post ('/api/cotizar/precio/:shop_id/:id_producto', async (req, res) => {
    const {shop_id, id_producto} = req.params
    const {precio} = req.body

    try {
        const updateCarrito = {precio}
        await pool.query ('UPDATE carrito_cotizacion set ? WHERE shop_id = ? AND id_producto = ?', [updateCarrito, shop_id, id_producto])
        const lista_cotizar = await pool.query (`SELECT * FROM carrito_cotizacion WHERE shop_id = ?`, [shop_id])
        return res.json ({
            lista_cotizar: lista_cotizar,
            success: true
        })
    
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/cotizar/:shop_id', async (req, res) => {{
    const {shop_id} = req.params

    try {
        const lista_cotizar = await pool.query (`SELECT * FROM carrito_cotizacion WHERE shop_id = ?`, [shop_id])
        
        return res.json ({
            lista_cotizar: lista_cotizar,
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
}})

router.get ('/api/delete/producto/cotizar/:shop_id/:id_producto', async (req, res) => {
    const {shop_id, id_producto} = req.params

    try {
        await pool.query ('DELETE FROM carrito_cotizacion WHERE shop_id = ? AND id_producto = ?', [shop_id, id_producto])
        const lista_cotizar = await pool.query ('SELECT * FROM carrito_cotizacion WHERE shop_id = ?', [shop_id])
        return res.json ({
            lista_cotizar: lista_cotizar,
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/delete/cotizar/:shop_id', async (req, res) => {
    const {shop_id} = req.params

    try {
        await pool.query ('DELETE FROM carrito_cotizacion WHERE shop_id = ?', [shop_id])
        return res.json ({
            lista_cotizar: [],
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.post ('/api/usuario/cotizar/:shop_id', async (req, res) => {
    const {shop_id} = req.params
    const {usuario} = req.body

    try {
        console.log (usuario, shop_id)
        const updateCarrito = {usuario}
        await pool.query ('UPDATE carrito_cotizacion set ? WHERE shop_id = ?', [updateCarrito, shop_id])
        const lista_cotizar = await pool.query ('SELECT * FROM carrito_cotizacion WHERE shop_id = ?', [shop_id])
        return res.json ({
            lista_cotizar: lista_cotizar,
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })        
    }
})

router.get ('/api/cotizaciones/:usuario', async(req, res) => {
    const {usuario} = req.params
    const estado = ''
    try {
        const cotizaciones = await pool.query ('SELECT * FROM carrito_cotizacion WHERE usuario = ?  GROUP BY shop_id', [usuario])
        return res.json ({
            cotizaciones: cotizaciones,
            success: true
        })
        
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }   
})

router.get ('/api/cotizaciones/productos/:shop_id', async(req, res) => {
    const {shop_id} = req.params
    try {
        const productos = await pool.query (`SELECT productos_proveedor.producto, carrito_cotizacion.cantidad, carrito_cotizacion.estado FROM carrito_cotizacion JOIN productos_proveedor ON productos_proveedor.id = carrito_cotizacion.id_producto 
                                                WHERE shop_id = ?`, [shop_id])
        return res.json ({
            productos: productos,
            success: true
        })
        
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }   
})

router.get ('/api/cotizaciones/productos/detalles/:shop_id', async(req, res) => {
    const {shop_id} = req.params
    try {
        const productos = await pool.query (`SELECT productos_proveedor.producto, carrito_cotizacion.cantidad, carrito_cotizacion.precio, productos_proveedor.proveedor,
                                                carrito_cotizacion.comentarios, productos_proveedor.descripcion, productos_proveedor.foto_uno, carrito_cotizacion.comentarios,
                                                carrito_cotizacion.precio, carrito_cotizacion.observaciones,
                                                carrito_cotizacion.estado FROM carrito_cotizacion JOIN productos_proveedor ON 
                                                productos_proveedor.id = carrito_cotizacion.id_producto 
                                                WHERE shop_id = ?`, [shop_id])
        return res.json ({
            productos: productos,
            success: true
        })
        
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }   
})

router.post ('/api/cotizacion/:shop_id', async (req, res) => {
    const {shop_id} = req.params
    const {estado} = req.body

    try {
        const updateEstado = {estado}
        await pool.query ('UPDATE carrito_cotizacion set ? WHERE shop_id = ?', [updateEstado, shop_id])

        return res.json ({
            success: true
        })
        
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/cotizacion/productos/detalles/cliente/:shop_id', async(req, res) => {
    const {shop_id} = req.params
    try {
        const productos = await pool.query (`SELECT productos_proveedor.foto_uno, productos_proveedor.producto, productos_proveedor.proveedor, carrito_cotizacion.usuario, carrito_cotizacion.cantidad,
                                             carrito_cotizacion.comentarios, carrito_cotizacion.estado, carrito_cotizacion.nro_pedido, carrito_cotizacion.created_at, productos_proveedor.id,
                                             carrito_cotizacion.precio, carrito_cotizacion.observaciones, carrito_cotizacion.shop_id FROM carrito_cotizacion JOIN
                                             productos_proveedor ON carrito_cotizacion.id_producto = productos_proveedor.id WHERE carrito_cotizacion.shop_id = ?`, [shop_id])
        const usuario = await pool.query (`SELECT * FROM info_clientes WHERE usuario = ?`, [productos[0].usuario])
        return res.json ({
            usuario: usuario[0],
            productos: productos,
            success: true
        })
        
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }   
})

module.exports = router