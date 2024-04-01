const express = require('express')
const router = express.Router()

const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.get ('/api/productos/:begin/:cantidad', async (req, res) => {
    const {begin, cantidad} = req.params
    try {
        const productos = await pool.query (`SELECT * FROM productos_proveedor LIMIT ${begin},${cantidad}`)

        if (parseInt (begin) === 0){
            const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor`)
            return res.json ({
                total_productos: total_productos[0][`COUNT (id)`],
                productos: productos,
                success: true
            })
        }else{
            return res.json ({
                productos: productos,
                success: true
            })
        }
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/productos/:id_proveedor', async (req, res) => {
    const {id_proveedor} = req.params
    try {
        const productos = await pool.query ('SELECT * FROM productos_proveedor WHERE id_proveedor = ? ORDER BY proveedor', [id_proveedor])

        return res.json ({
            productos: productos,
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/productos/:id_proveedor/:inicio/:cantidad', async (req, res) => {
    const {id_proveedor, inicio, cantidad} = req.params
    try {
        const productos = await pool.query (`SELECT * FROM productos_proveedor WHERE id_proveedor = ? ORDER BY producto LIMIT ${inicio},${cantidad}`, [id_proveedor])

        if (parseFloat (inicio) === 0){
            const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor WHERE id_proveedor = ?`, [id_proveedor])
            return res.json ({
                total_productos: total_productos[0][`COUNT (id)`],
                productos: productos,
                success: true
            })
        }else{
            return res.json ({
                productos: productos,
                success: true
            })
        }
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/producto/:id_producto', async (req, res) => {
    const {id_producto} = req.params

    try {
        const productos = await pool.query ('SELECT * FROM productos_proveedor WHERE id = ?', [id_producto])

        return res.json ({
            producto: productos[0],
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/productos/search/:search/filtro/:filtro/order/:order_by/:order/:begin/:cantidad', async (req, res) => {
    const {search, order_by, filtro, order, begin, cantidad} = req.params

    try {
        if (filtro === '0' && search === '0' && order_by === '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor`)
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }
        }else if (filtro === '0' && search === '0' && order_by !== '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor ORDER BY ${order_by} ${order} LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor`)
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }            
        }else if (filtro === '0' && search !== '0' && order_by === '0'){
            const productos = await pool.query (`SELECT productos_proveedor.id, productos_proveedor.producto, productos_proveedor.descripcion, productos_proveedor.proveedor, productos_proveedor.foto_uno,
                                                productos_proveedor.id_proveedor
                                                FROM productos_proveedor JOIN proveedores ON proveedores.id = productos_proveedor.id_proveedor WHERE productos_proveedor.proveedor LIKE '%${search}%' 
                                                OR productos_proveedor.descripcion LIKE '%${search}%' OR productos_proveedor.caracteristica_uno LIKE '%${search}%' OR productos_proveedor.caracteristica_dos LIKE '%${search}%'  
                                                OR productos_proveedor.caracteristica_tres LIKE '%${search}%' OR productos_proveedor.caracteristica_cuatro LIKE '%${search}%' 
                                                OR productos_proveedor.caracteristica_cinco LIKE '%${search}%' 
                                                OR productos_proveedor.producto LIKE '%${search}%' OR proveedores.proveedor LIKE '%${search}%' OR proveedores.descripcion LIKE '%${search}%' LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%'`)
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }
        }else if (filtro === '0' && search !== '0' && order_by !== '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%' ORDER BY 
                ${order_by} ${order} LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%'`)
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }
        }else if (filtro !== '0' && search === '0' && order_by === '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor WHERE id_proveedor = ? LIMIT ${begin},${cantidad}`, [filtro])

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor  WHERE id_proveedor = ?`, [filtro])
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }
        }else if (filtro !== '0' && search === '0' && order_by !== '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor WHERE id_proveedor = ? ORDER BY ${order_by} ${order} LIMIT ${begin},${cantidad}`, [filtro])

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor WHERE id_proveedor = ?`, [filtro])
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }            
        }else if (filtro !== '0' && search !== '0' && order_by === '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor WHERE id_proveedor = ? AND 
                (proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%') LIMIT ${begin},${cantidad}`, [filtro])

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor WHERE id_proveedor = ? AND 
                    (proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%')`, [filtro])
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }
        }else if (filtro !== '0' && search !== '0' && order_by !== '0'){
            const productos = await pool.query (`SELECT * FROM productos_proveedor WHERE id_proveedor = ? AND 
                (proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%') ORDER BY 
                ${order_by} ${order} LIMIT ${begin},${cantidad}`, [filtro])

            if (parseInt(begin) === 0){
                const total_productos = await pool.query (`SELECT COUNT (id) FROM productos_proveedor WHERE id_proveedor = ? AND 
                    (proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%')`, [filtro])
                return res.json ({
                    total_productos: total_productos[0][`COUNT (id)`],
                    productos: productos,
                    success: true
                })
            }else{
                return res.json ({
                    productos: productos,
                    success: true
                })
            }
        }
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/proveedor/detalles/productos/:id_proveedor', async (req, res) => {
    const {id_proveedor} = req.params

    try {
        const proveedor = await pool.query ('SELECT * FROM proveedores WHERE id = ?', [id_proveedor])
        const productos = await pool.query ('SELECT * FROM productos_proveedor WHERE id_proveedor = ?', [id_proveedor])
        const total_productos = await pool.query ('SELECT COUNT (id) FROM productos_proveedor WHERE id_proveedor = ?', [id_proveedor])
        return res.json ({
            productos: productos,
            proveedor: proveedor[0],
            total_productos: total_productos[0][`COUNT (id)`],
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            productos: [],
            proveedor: {},
            success: false
        })
    }
})

router.get ('/api/producto/detalles/medida/:id_medida', async(req, res) => {
    const {id_medida} = req.params

    try {
        const producto = await pool.query ('SELECT * FROM productos_proveedor WHERE id_medida = ?', [id_medida])

        return res.json ({
            producto: producto [0],
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            producto: {},
            success: false
        })
    }
})

module.exports = router