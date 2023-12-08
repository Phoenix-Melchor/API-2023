import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { createPurchase, deletePurchase, readPurchase, updatePurchase,  } from './purchase.service';
import express from 'express'
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
    let purchase = null
    if (_req?.params?.id){purchase = await readPurchase(Number(_req?.params?.id))}
    else {purchase = await readPurchase();}
    res.json(purchase);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    res.status(500).send('Error al obtener compras de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const purchase = await createPurchase(data);
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
    const purchase = await updatePurchase(Number(_req.params.id), data)
    res.json(purchase)
  }
  catch(error){
    console.error('Error al actualizar compra', error);
    res.status(500).send('Error al actualizar compra');
  }
})

router.delete('/remove/:id', (_req, res) => {
  try{
    const purchase = deletePurchase(Number(_req.params.id))
    res.json(purchase)
  }
  catch(error){
    console.error('Error al eliminar compra', error);
    res.status(500).send('Error al eliminar compra')
  }
})

export default router