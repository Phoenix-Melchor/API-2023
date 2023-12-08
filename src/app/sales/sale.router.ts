import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { createSale, deleteSale, readSale, updateSale} from './sale.service';
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
    let sales = null
    if (_req?.params?.id){sales = await readSale(Number(_req?.params?.id))}
    else {sales = await readSale();}
    res.json(sales);
  } catch (error) {
    console.error('Error al obtener descuentos:', error);
    res.status(500).send('Error al obtener descuentos de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const sale = await createSale(data);
    res.json(sale)
  }
  catch(error){
    console.error('Error al agregar descuento', error);
    res.status(500).send('Error al agregar descuento');
  }
})

router.put('/update/:id', async (_req, res) => {
  try{
    const data = _req.body
    const sale = await updateSale(Number(_req.params.id), data)
    res.json(sale)
  }
  catch(error){
    console.error('Error al actualizar descuento', error);
    res.status(500).send('Error al actualizar descuento');
  }
})

router.delete('/remove/:id', (_req, res) => {
  try{
    const saled = deleteSale(Number(_req.params.id))
    res.json(saled)
  }
  catch(error){
    console.error('Error al eliminar descuento', error);
    res.status(500).send('Error al eliminar descuento')
  }
})

export default router