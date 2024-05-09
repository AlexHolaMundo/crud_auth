import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    apellido: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    edad: {
      type: Number,
    },
    cedula: {
      type: String,
      unique: true,
    },
    telefono: {
      type: Number,
    },
    direccion: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Usuario', userSchema)
