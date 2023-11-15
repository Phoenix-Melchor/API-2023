import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { IMovies, createMovie, readMovie, updateMovie, deleteMovie } from './movies.service';
import * as express from 'express';

@Tags('Movies')
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
}