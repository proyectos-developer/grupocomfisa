const express = require('express')
const router = express.Router()

const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.get ('/api/proveedores', async (req, res) => {
    try {
        const proveedores = await pool.query ('SELECT * FROM proveedores ORDER BY proveedor')

        return res.json ({
            proveedores: proveedores,
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/proveedor/:id_proveedor', async (req, res) => {
    const {id_proveedor} = req.params

    try {
        const proveedores = await pool.query ('SELECT * FROM proveedores WHERE id = ?', [id_proveedor])

        return res.json ({
            proveedor: proveedores[0],
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/proveedor/productos/:id_proveedor', async (req, res) => {
    const {id_proveedor} = req.params

    try {
        const productos = await pool.query ('SELECT * FROM productos_proveedor WHERE id_proveedor = ?', [id_proveedor])

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

router.get ('/api/proveedores/search/:search/order/:order_by/:order/:begin/:cantidad', async (req, res) => {
    const {search, order_by, order, begin, cantidad} = req.params

    try {
        if (search === '0' && order_by === '0'){
            const proveedores = await pool.query (`SELECT * FROM proveedores LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_proveedores = await pool.query (`SELECT COUNT (id) FROM proveedores`)
                return res.json ({
                    total_proveedores: total_proveedores[0][`COUNT (id)`],
                    proveedores: proveedores,
                    success: true
                })
            }else{
                return res.json ({
                    proveedores: proveedores,
                    success: true
                })
            }
        }else if (search === '0' && order_by !== '0'){
            const proveedores = await pool.query (`SELECT * FROM proveedores ORDER BY ${order_by} ${order} LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_proveedores = await pool.query (`SELECT COUNT (id) FROM proveedores`)
                return res.json ({
                    total_proveedores: total_proveedores[0][`COUNT (id)`],
                    proveedores: proveedores,
                    success: true
                })
            }else{
                return res.json ({
                    proveedores: proveedores,
                    success: true
                })
            }            
        }else if (search !== '0' && order_by === '0'){
            const proveedores = await pool.query (`SELECT * FROM proveedores WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%' LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_proveedores = await pool.query (`SELECT COUNT (id) FROM proveedores WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%'`)
                return res.json ({
                    total_proveedores: total_proveedores[0][`COUNT (id)`],
                    proveedores: proveedores,
                    success: true
                })
            }else{
                return res.json ({
                    proveedores: proveedores,
                    success: true
                })
            }
        }else if (search !== '0' && order_by !== '0'){
            const proveedores = await pool.query (`SELECT * FROM proveedores WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%' ORDER BY 
                ${order_by} ${order} LIMIT ${begin},${cantidad}`)

            if (parseInt(begin) === 0){
                const total_proveedores = await pool.query (`SELECT COUNT (id) FROM proveedores WHERE proveedor LIKE '%${search}%' OR descripcion LIKE '%${search}%'`)
                return res.json ({
                    total_proveedores: total_proveedores[0][`COUNT (id)`],
                    proveedores: proveedores,
                    success: true
                })
            }else{
                return res.json ({
                    proveedores: proveedores,
                    success: true
                })
            }
        }
    } catch (error) {
        console.log (error)
        return res.json ({
            error: error,
            success: false
        })
    }
})

<<<<<<< HEAD
=======
router.get ('/api/tipo_productos/proveedor/:id_proveedor', async (req, res) => {
    const {id_proveedor} = req.params

    try {
        const tipo_productos = await pool.query ('SELECT * FROM tipo_producto_proveedor WHERE id_proveedor = ?', [id_proveedor])

        return res.json ({
            tipo_productos: tipo_productos,
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            tipo_productos: [],
            sucess: false
        })
    }
})

router.get ('/api/medidas/productos/proveedor/:id_tipo', async (req, res) => {
    const {id_tipo} = req.params

    try {
        const medidas = await pool.query ('SELECT * FROM medida_tipo_producto WHERE id_tipo = ?', [id_tipo])

        return res.json ({
            medidas: medidas,
            success: true
        })
    } catch (error) {
        console.log (error)
        return res.json ({
            medidas: [],
            success: false
        })
    }
})

>>>>>>> 745518f (V1.0.14)
module.exports = router