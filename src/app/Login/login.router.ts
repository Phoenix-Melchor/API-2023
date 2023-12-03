import express from 'express'
import { login } from './login.service';

const router = express.Router()


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const user = await login(data);
    res.json(user)
  }
  catch(error){
    console.error('Error al agregar usuario', error);
    res.status(500).send('Error al agregar usuario');
  }
})

export default router