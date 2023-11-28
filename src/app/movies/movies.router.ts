import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { createMovie, readMovie, updateMovie, deleteMovie } from './movies.service';
import express from 'express'

const router = express.Router()

router.get('/:id?', async (_req, res) => {
  try {
    let movies = null
    if (_req?.params?.id){movies = await readMovie(Number(_req?.params?.id))}
    else {movies = await readMovie();}
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener peliculas:', error);
    res.status(500).send('Error al obtener peliculas de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const movie = await createMovie(data);
    res.json(movie)
  }
  catch(error){
    console.error('Error al agregar pelicula', error);
    res.status(500).send('Error al agregar pelicula');
  }
})

router.put('/update/:id', async (_req, res) => {
  try{
    const data = _req.body
    const movie = await updateMovie(Number(_req.params.id), data)
    res.json(movie)
  }
  catch(error){
    console.error('Error al actualizar pelicula', error);
    res.status(500).send('Error al actualizar pelicula');
  }
})

router.delete('/remove/:id', (_req, res) => {
  try{
    const movied = deleteMovie(Number(_req.params.id))
    res.json(movied)
  }
  catch(error){
    console.error('Error al eliminar pelicula', error);
    res.status(500).send('Error al eliminar pelicula')
  }
})

export default router

/*@Tags('Movies')
@Route('/api/movie')
export class MoviesController extends Controller {

  // CREATE CONTROLLER
  @Post('/create')
  public async createMovie(@Body() data: IMovies) {
    return createMovie(data)
  }

  // READ CONTROLLER
  @Get('/read')
  public async readMovie() {
    return readMovie()
  }

  @Get('/read/{data_id}')
  public async readTodoWithId(@Path('data_id') data_id: number) {
    return readMovie(data_id)
  }

  // UPDATE CONTROLLER
  @Put('/update')
  public async updateMovie(@Body() todo: { id: number } & IMovies) {
    return updateMovie(todo)
  }

  // DELETE CONTROLLER
  @Delete('/delete/{data_id}')
  public async deleteMovie(@Path('data_id') data_id: number) {
    return deleteMovie(data_id)
  }
}*/