import express from 'express'
import { createPurchaseDet, readPurchaseDet, updatePurchaseDet } from './purchasedetails.service';
import { verifyToken } from '../user/user.service';

const router = express.Router()

router.use(async (req,res, next) => {
  const token = req.header('valid-token');

  if(!token){
    return res.status(401).send('Acceso denegado. Token no proporcionado')
  }

  try{
    await verifyToken(token.replace('Bearer ', ''), '83046127603128')
    next()
  } catch (error) {
    return res.status(403).send('Token Invalido')
  }
})

router.get('/:id?', async (_req, res) => {
  try {
    let purchases = null
    if (_req?.params?.id){purchases = await readPurchaseDet(Number(_req?.params?.id))}
    else {purchases = await readPurchaseDet();}
    res.json(purchases);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    res.status(500).send('Error al obtener compras de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const purchase = await createPurchaseDet(data);
    res.json(purchase)
  }
  catch(error){
    console.error('Error al agregar compra', error);
    res.status(500).send('Error al agregar compra');
  }
})

router.put('/update/:id', async (_req, res) => {
  try{
    const data = _req.body
    const purchase = await updatePurchaseDet(Number(_req.params.id), data)
    res.json(purchase)
  }
  catch(error){
    console.error('Error al actualizar compra', error);
    res.status(500).send('Error al actualizar compra');
  }
})

router.delete('/remove/:id', (_req, res) => {
  try{

  }
  catch(error){
    console.error('Error al eliminar compra', error);
    res.status(500).send('Error al eliminar compra')
  }
})

export default router