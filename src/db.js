import mongoose, { Mongoose } from 'mongoose'

export const connectDB = async () => {
  try {
    const conexion = await mongoose.connect(process.env.conexion)
    console.log('>>> Conexión a la base de datos establecida')
  } catch (err) {
    console.log('Error al conectar a la base de datos', err)
  }
}
