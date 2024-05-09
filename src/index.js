import app from './app.js'
import { connectDB } from './db.js'

connectDB()
const puerto = process.env.PORT || 3000
const server = app.listen(puerto)
console.log(`Servidor corriendo en el puerto ${puerto}`)
