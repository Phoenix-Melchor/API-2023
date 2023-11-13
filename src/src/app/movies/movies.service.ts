import {Movies} from '@entity/movies'

export interface IMovies {
    name: string,
    description: string,
    price: string,
    category: string,
    studio: string,
    stock: Number,
    measure: string,
    creation_date: Date,
    duration: Date,
    released_date: Date,
    active: boolean
}
  
  // CREATE SERVICE
export const createMovie = async (movies: IMovies) => {
    try {
        const _newMovies = new Movies();
        _newMovies['name'] = movies['name'];
        _newMovies['description'] = movies['description'];
        _newMovies['price'] = movies['price'];
        _newMovies['category'] = movies['category'];
        _newMovies['studio'] = movies['studio'];
        _newMovies['stock'] = movies['stock'];
        _newMovies['measure'] = movies['measure'];
        _newMovies['creation_date'] = movies['creation_date'];
        _newMovies['duration'] = movies['duration'];
        _newMovies['released_date'] = movies['released_date'];
        _newMovies['active'] = movies['active'];
        return await _newMovies.save();
    } catch (e) {
        console.error(e);
    }
  }
  
  // READ SERVICE
export const readMovie = async (moviesId?: number) => {
    try {
        if (moviesId) { 
            return await Movies.findOne({
            where: { id: moviesId },
        });
      } else {
            return await Movies.find();
        }
    } catch (e) {
        console.error(e);
    }
}
  
  // UPDATE SERVICE
export const updateMovie = async (movie: { id: number } & IMovies) => {
    try {
        const _foundmovie = await Movies.findOne({ where: { id: movie['id'] } });
        if (!_foundmovie) return { message: "Movie not found!" };
        if (movie['name']) _foundmovie['name'] = movie['name'];
        if (movie['description']) _foundmovie['description'] = movie['description'];
        if (movie['price']) _foundmovie['price'] = movie['price'];
        if (movie['category']) _foundmovie['category'] = movie['category'];
        if (movie['studio']) _foundmovie['studio'] = movie['studio'];
        if (movie['stock']) _foundmovie['stock'] = movie['stock'];
        if (movie['measure']) _foundmovie['measure'] = movie['measure'];
        if (movie['creation_date']) _foundmovie['creation_date'] = movie['creation_date'];
        if (movie['duration']) _foundmovie['duration'] = movie['duration'];
        if (movie['released_date']) _foundmovie['released_date'] = movie['released_date'];
        if (movie['active']) _foundmovie['active'] = movie['active'];
        return await _foundmovie.save();
    } catch (e) {
      console.error(e);
    }
}
  
  // DELETE SERVICE
export const deleteMovie = async (moviesId: number) => {
    try {
        const _foundMovie = await Movies.findOne({ where: { id: moviesId } });
        if (!_foundMovie) return { message: "Movie not found" };
        return await _foundMovie.remove();
    } catch (e) {
      console.error(e);
    }
}