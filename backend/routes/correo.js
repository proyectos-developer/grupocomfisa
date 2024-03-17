const express = require('express')
const router = express.Router()

const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const pool = require('../database')

const nodemailer = require('nodemailer')
const SMTPTransport = require('nodemailer/lib/smtp-transport')

var transporter = nodemailer.createTransport( new SMTPTransport ({
    host: 'developer-ideas.com',
    secure: true,
    port: 465,
    auth: {
        user: 'admin@developer-ideas.com',
        pass: '206@Dev2702ideas732'
    },
    tls: {
        rejectUnauthorized: false
    }
}))

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: path.resolve (__dirname, 'template'),
        defaultLayout: false,
    },
    viewPath: path.resolve (__dirname, 'template'),
    extName: '.handlebars'
};

transporter.use('compile', hbs(handlebarOptions))

router.post('/api/correo/nuevo/password', async (req, res) => {
    const { correo } = req.body

    const usuarios = await pool.query ('SELECT * FROM clientes JOIN info_clientes ON clientes.usuario = info_clientes.usuario WHERE clientes.correo = ?', [correo])
    if (usuarios.length === 1){
        var mailOptions = {
            from: '"Grupo COMFISA" <admin@developer-ideas.com>', // sender address
            to: usuarios[0].correo, // list of receivers
            subject: 'Olvide mi contraseña Grupo COMFISA',
            template: 'olvidepassword', // the name of the template file i.e email.handlebars
            context:{
                nombres: usuarios[0].nombres // replace {{name}} with Adebola
            }
        }
    
        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.json ({
                    message: 'error: ' + error
                })
            }
            
            return res.json ({
                message: info
            })
        });        
    }else{
        return res.json ({
            message: '1'
        })
    }
})

router.post('/api/correo/nueva/cotizacion/:shop_id/:usuario', async (req, res) => {
    const { usuario, shop_id } = req.params

    try {
        const data_usuario = await pool.query (`SELECT * FROM info_clientes WHERE usuario = ?`, [usuario])
        const cotizacion = await pool.query (`SELECT productos_proveedor.producto, carrito_cotizacion.cantidad, carrito_cotizacion.precio,
                                                carrito_cotizacion.comentarios, productos_proveedor.proveedor, productos_proveedor.foto_uno,
                                                carrito_cotizacion.estado FROM carrito_cotizacion JOIN productos_proveedor ON 
                                                productos_proveedor.id = carrito_cotizacion.id_producto 
                                                WHERE carrito_cotizacion.shop_id = ?`, [shop_id])
        console.log (cotizacion)
        console.log (data_usuario[0]) 

        var mailOptions = {
            from: '"Grupo COMFISA" <admin@developer-ideas.com>', // sender address
            to: data_usuario[0].correo,// + ', ventas@grupocomfisa.com, gerencia@grupocomfisa.com', // list of receivers
            subject: 'Pedido de cotización',
            template: 'pedidocotizacion', // the name of the template file i.e email.handlebars
            context:{
                nombres: data_usuario[0].nombres,
                apellidos: data_usuario[0].apellidos, // replace {{name}} with Adebola
                lista_cotizacion: cotizacion
            }
        }
    
        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.json ({
                    message: 'error: ' + error
                })
            }
            
            return res.json ({
                message: info
            })
        });        
    } catch (error) {
        console.log (error)
        return res.json({
            error: error,
            success: false
        })
    }
})

router.post('/api/correo/mensaje/web', async (req, res) => {
    const { correo, nombres, apellidos, telefono, mensaje } = req.body

    var mailOptions = {
        from: '"Grupo COMFISA" <admin@developer-ideas.com>', // sender address
        to: correo, //+ ', ventas@grupocomfisa.com, gerencia@grupocomfisa.com', // list of receivers
        subject: 'Mensaje de la web Grupo COMFISA',
        template: 'mensajeweb', // the name of the template file i.e email.handlebars
        context:{
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono,
            mensaje: mensaje // replace {{name}} with Adebola
        }
    }

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return res.json ({
                message: 'error: ' + error
            })
        }
        
        return res.json ({
            message: info
        })
    });        
})

module.exports = router