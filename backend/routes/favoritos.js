const express = require('express')
const router = express.Router()

const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.post('/api/favoritos', async(req, res) => {
    const {id_producto, usuario} = req.body

    try {
        const newFavorito = {id_producto, usuario}
        await pool.query ('INSERT INTO favoritos set ?', [newFavorito])
        const favoritos = await pool.query ('SELECT * FROM favoritos WHERE usuario = ?', [usuario])

        return res.json ({
            favoritos: favoritos,
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/delete/favoritos/:id_favorito/:usuario', async (req, res) => {
    const {id_favorito, usuario} = req.params
    try {
        await pool.query ('DELETE FROM favoritos WHERE id = ?', [id_favorito])
        const favoritos = await pool.query ('SELECT * FROM favoritos WHERE usuario = ?', [usuario])

        return res.json ({
            favoritos: favoritos,
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

router.get ('/api/favoritos/:usuario', async (req, res) => {
    const {usuario} = req.params

    try {
        const favoritos = await pool.query ('SELECT * FROM favoritos WHERE usuario = ?', [usuario])
        
        return res.json ({
            favoritos: favoritos,
            success: true
        })
    } catch (error) {
        return res.json ({
            error: error,
            success: false
        })
    }
})

module.exports = router