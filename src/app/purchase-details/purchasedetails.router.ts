import express from 'express'
import { createPurchaseDet, readPurchaseDet, updatePurchaseDet } from './purchasedetails.service';

const router = express.Router()


router.get('/:id?', async (_req, res) => {
  try {
    let users = null
    if (_req?.params?.id){users = await readPurchaseDet(Number(_req?.params?.id))}
    else {users = await readPurchaseDet();}
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const user = await createPurchaseDet(data);
    res.json(user)
  }
  catch(error){
    console.error('Error al agregar usuario', error);
    res.status(500).send('Error al agregar usuario');
  }
})

router.put('/update/:id', async (_req, res) => {
  try{
    const data = _req.body
    const user = await updatePurchaseDet(Number(_req.params.id), data)
    res.json(user)
  }
  catch(error){
    console.error('Error al actualizar usuario', error);
    res.status(500).send('Error al actualizar usuario');
  }
})

router.delete('/remove/:id', (_req, res) => {
  try{

  }
  catch(error){
    console.error('Error al eliminar usuario', error);
    res.status(500).send('Error al eliminar usuario')
  }
})

export default router