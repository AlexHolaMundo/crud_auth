import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const uri = process.env.conexion

    if (!uri) {
      throw new Error(
        'La URL de conexión no está definida en process.env.conexion'
      )
    }

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }

    const conexion = await mongoose.connect(uri, options)
    console.log('>>> Conexión a la base de datos establecida')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message)
  }
}
