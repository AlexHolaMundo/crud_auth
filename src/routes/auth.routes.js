import { Router } from 'express'
import {
  login,
  logout,
  registro,
  getUsuarioPorCedula,
} from '../controllers/auth.controller.js'

const router = Router()

router.post('/registro', registro)
router.post('/login', login)
router.post('/logout', logout)
router.get('/usuario/cedula/:cedula', getUsuarioPorCedula)

export default router
