const express = require('express')
const router = express.Router()

const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.post ('/api/cliente/', async (req, res) => {
    const {nombres, apellidos, correo, nro_telefono, usuario, tipo_documento, nro_documento, razon_social, nro_ruc} = req.body
    try {
        const newCliente = {nombres, apellidos, correo, nro_telefono, usuario, tipo_documento, nro_documento, razon_social, nro_ruc}
        const new_cliente = await pool.query (`INSERT INTO info_clientes set ?`, [newCliente])
        const cliente = await pool.query ('SELECT * FROM info_clientes WHERE id = ?', [new_cliente.insertId])

        return res.json ({
            cliente: cliente[0],
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/cliente/:usuario', async (req, res) => {
    const {usuario} = req.params
    
    try {
        const cliente = await pool.query ('SELECT * FROM info_clientes WHERE usuario = ?', [usuario])
        console.log (cliente)
        return res.json ({
            cliente: cliente[0],
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

router.post ('/api/cliente/:usuario', async (req, res) => {
    const {usuario} = req.params
    const {nombres, apellidos, tipo_documento, nro_documento, razon_social, nro_ruc} = req.body

    try {
        const updateCliente = {nombres, apellidos, tipo_documento, nro_documento, razon_social, nro_ruc}
        await pool.query ('UPDATE info_clientes set ? WHERE usuario = ?', [updateCliente, usuario])
        const cliente = await pool.query ('SELECT * FROM info_clientes WHERE usuario = ?', [usuario])
        return res.json ({
            cliente: cliente[0],
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