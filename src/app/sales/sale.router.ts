import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { createSale, deleteSale, readSale, updateSale} from './sale.service';
import express from 'express'

const router = express.Router()

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