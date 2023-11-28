import { Movies } from '@entity/movies'
import { AppDataSource } from 'src/database/db';

const moviesRepo = AppDataSource.getRepository(Movies)

export interface IMovies {
    name: string,
    description: string,
    price: string,
    category: string,
    studio: string,
    stock: Number,
    measure: string,
    creation_date: string,
    duration: string,
    release_date: string,
    active: number  
}
  
// CREATE SERVICE
export const createMovie = async (movie: IMovies) => {
  try {
    const newMovie = new Movies();
    newMovie.name = movie.name;
    newMovie.description = movie.description;
    newMovie.price = movie.price;
    newMovie.category = movie.category;
    newMovie.studio = movie.studio;
    newMovie.stock = movie.stock;
    newMovie.measure = movie.measure;
    newMovie.creation_date = movie.creation_date;
    newMovie.duration = movie.duration;
    newMovie.release_date = movie.release_date;
    newMovie.active = movie.active;

    return await newMovie.save();
  } catch (e) {
    console.error(e);
  }
};

//READ SERVICE
export const readMovie = async (id?: number) => {
  try {
    if(id){return await moviesRepo.findOne({where: {id: id}})}
    else{return await moviesRepo.find();}
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener usuarios de la base de datos');
  }
};

// UPDATE SERVICE
export const updateMovie = async (id: number, movie: IMovies) => {
  try {
    const foundMovie = await Movies.findOne({ where: {id: id} });
    if (!foundMovie) return { message: 'Movie not found!' };

    foundMovie.name = movie.name;
    foundMovie.description = movie.description;
    foundMovie.price = movie.price;
    foundMovie.category = movie.category;
    foundMovie.studio = movie.studio;
    foundMovie.stock = movie.stock;
    foundMovie.measure = movie.measure;
    foundMovie.creation_date = movie.creation_date;
    foundMovie.duration = movie.duration;
    foundMovie.release_date = movie.release_date;
    foundMovie.active = movie.active;
    
    return await foundMovie.save();
  } catch (e) {
    console.error(e);
  }
};

// DELETE SERVICE
export const deleteMovie = async (movieId: number) => {
  try {
    const foundMovie = await Movies.findOne({ where: { id: movieId } });
    if (!foundMovie) return { message: 'Movie not found' };
    foundMovie.active = 0
    return await foundMovie.save();
  } catch (e) {
    console.error(e);
  }
};