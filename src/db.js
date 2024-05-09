import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/userCrud')
    console.log('>>> Conexión a la base de datos establecida')
  } catch (err) {
    console.log('Error al conectar a la base de datos', err)
  }
}
