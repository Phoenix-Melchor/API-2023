import express from 'express'
import { login } from './login.service';

const router = express.Router()


router.post('/login', async (_req, res) => {
  try{
    const data = _req.body
    const user = await login(data);
    res.json(user)
  }
  catch(error){
    console.error('Error al iniciar sesion', error);
    res.status(500).send('Error al iniciar sesion');
  }
})

export default router