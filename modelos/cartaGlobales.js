const mongoose = require('./mongooseTeg').mongoose

const cartaGlobalSchema = new mongoose.Schema({
    tipo: String,
    cantidad: Number,
    defensa: Number,
    ataque: Number,
    fronteraAbierta: Boolean,
    fronteraCerrada: Boolean,
    crisis: Boolean,
    refuerzosExtra: Boolean,
    color: String
})

const CartaGlobal = mongoose.model('cartaglobales', cartaGlobalSchema)

module.exports = CartaGlobal