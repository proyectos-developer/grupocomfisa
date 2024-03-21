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
        extName: '.hbs',
        partialsDir: path.resolve (__dirname, 'template'),
        defaultLayout: false,
    },
    viewPath: path.resolve (__dirname, 'template'),
    extName: '.hbs'
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
                usuario: usuarios[0].usuario,
                nombres: usuarios[0].nombres,
                apellidos: usuarios[0].apellidos // replace {{name}} with Adebola
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
                usuario: usuarios[0].usuario,
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
        const cotizaciones = await pool.query (`SELECT * FROM carrito_cotizacion GROUP BY shop_id`)
        let nro_pedido = `${cotizaciones.length < 10 ? `0000${cotizaciones.length}` : cotizaciones.length < 100 ? `000${cotizaciones.length}` : cotizaciones.length < 1000 ? `00${cotizaciones.length}` : cotizaciones.length < 10000 ? `0${cotizaciones.length}` : `${cotizaciones.length}`}`
        let estado = 'enviado'
        const updateCarrito = {nro_pedido, estado}
        await pool.query (`UPDATE carrito_cotizacion set ? WHERE shop_id = ?`, [updateCarrito, shop_id])
        const data_usuario = await pool.query (`SELECT * FROM info_clientes WHERE usuario = ?`, [usuario])
        const cotizacion = await pool.query (`SELECT productos_proveedor.producto, carrito_cotizacion.cantidad, carrito_cotizacion.precio,
                                                carrito_cotizacion.comentarios, productos_proveedor.proveedor, productos_proveedor.foto_uno,
                                                carrito_cotizacion.estado FROM carrito_cotizacion JOIN productos_proveedor ON 
                                                productos_proveedor.id = carrito_cotizacion.id_producto 
                                                WHERE carrito_cotizacion.shop_id = ?`, [shop_id])

        var mailOptions = {
            from: '"Grupo COMFISA" <admin@developer-ideas.com>', // sender address
            to: 'developer.ideas2017@gmail.com',// + ', ventas@grupocomfisa.com, gerencia@grupocomfisa.com', // list of receivers
            subject: `Nuevo pedido de cotización número ${nro_pedido}`,
            template: 'pedidocotizacion', // the name of the template file i.e email.handlebars
            context:{
                nro_pedido: nro_pedido,
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

            var mailOptions = {
                from: '"Grupo COMFISA" <admin@developer-ideas.com>', // sender address
                to: data_usuario[0].correo,// + ', ventas@grupocomfisa.com, gerencia@grupocomfisa.com', // list of receivers
                subject: `Tu pedido de cotización número ${nro_pedido}`,
                template: 'pedidocotizacion', // the name of the template file i.e email.handlebars
                context:{
                    nro_pedido: nro_pedido,
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
        to: correo +', ventas@grupocomfisa.com, gerencia@grupocomfisa.com', // list of receivers
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

router.post('/api/correo/aceptado/cotizacion/:shop_id/:usuario', async (req, res) => {
    const { usuario, shop_id } = req.params

    try {
        const data_usuario = await pool.query (`SELECT * FROM info_clientes WHERE usuario = ?`, [usuario])
        const cotizacion = await pool.query (`SELECT productos_proveedor.producto, carrito_cotizacion.cantidad, carrito_cotizacion.precio,
                                                carrito_cotizacion.comentarios, productos_proveedor.proveedor, productos_proveedor.foto_uno,
                                                carrito_cotizacion.estado, carrito_cotizacion.nro_pedido FROM carrito_cotizacion JOIN productos_proveedor ON 
                                                productos_proveedor.id = carrito_cotizacion.id_producto 
                                                WHERE carrito_cotizacion.shop_id = ?`, [shop_id])

        var mailOptions = {
            from: '"Grupo COMFISA" <admin@developer-ideas.com>', // sender address
            to: data_usuario[0].correo,// + ', ventas@grupocomfisa.com, gerencia@grupocomfisa.com', // list of receivers
            subject: `Pedido de cotización aceptada número ${nro_pedido}`,
            template: 'pedidocotizacionaceptada', // the name of the template file i.e email.handlebars
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

module.exports = router