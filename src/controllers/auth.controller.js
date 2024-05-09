import Usuario from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

export const registro = async (req, res) => {
  const {
    nombre,
    apellido,
    password,
    email,
    edad,
    cedula,
    telefono,
    direccion,
  } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10)

    const newUsuario = new Usuario({
      nombre,
      apellido,
      password: passwordHash,
      email,
      edad,
      cedula,
      telefono,
      direccion,
    })
    const usuarioGuardado = await newUsuario.save()
    const token = await createAccessToken({ id: usuarioGuardado._id })
    res.cookie('token', token)
    res.json({
      _id: usuarioGuardado._id,
      nombre: usuarioGuardado.nombre,
      apellido: usuarioGuardado.apellido,
      email: usuarioGuardado.email,
      edad: usuarioGuardado.edad,
      cedula: usuarioGuardado.cedula,
      telefono: usuarioGuardado.telefono,
      direccion: usuarioGuardado.direccion,
      cretedAt: usuarioGuardado.createdAt,
      updatedAt: usuarioGuardado.updatedAt,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const login = async (req, res) => {
  const { cedula, password } = req.body

  try {
    const usuarioExiste = await Usuario.findOne({ cedula })
    if (!usuarioExiste)
      return res.status(400).json({ message: 'El usuario no existe' })

    const isMatch = await bcrypt.compare(password, usuarioExiste.password)
    if (!isMatch)
      return res.status(400).json({ message: 'La contraseña es incorrecta' })

    const token = await createAccessToken({ id: usuarioExiste._id })
    res.cookie('token', token)
    res.json({
      _id: usuarioExiste._id,
      nombre: usuarioExiste.nombre,
      apellido: usuarioExiste.apellido,
      email: usuarioExiste.email,
      edad: usuarioExiste.edad,
      cedula: usuarioExiste.cedula,
      telefono: usuarioExiste.telefono,
      direccion: usuarioExiste.direccion,
      cretedAt: usuarioExiste.createdAt,
      updatedAt: usuarioExiste.updatedAt,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) })
  return res.sendStatus(200)
}
