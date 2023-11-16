import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { IUser, readUsers} from './user.service';
import express from 'express'

const router = express.Router()
const userrep = 

router.get('/get', async (_req, res) => {
  try {
    const users = await readUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios de la base de datos');
  }
});

router.post('/post', (_req, res) => {
  res.send('adding user')
})

router.put('/update', (_req, res) => {
  res.send('updating user')
})

router.delete('/remove', (_req, res) => {
  res.send('removing user')
})

export default router

/*@Tags('Users')
@Route('/api/users')
export class UserController extends Controller {

  // CREATE CONTROLLER
  @Post('/create')
  public async createUser(@Body() data: IUser) {
    return createUser(data);
  }

  // READ CONTROLLER
  @Get('/read')
  public async readUser() {
    return readUser();
  }

  @Get('/read/{user_id}')
  public async readUserWithId(@Path('user_id') user_id: number) {
    return readUser(user_id);
  }

  // UPDATE CONTROLLER
  @Put('/update')
  public async updateUser(@Body() user: { id: number } & IUser) {
    return updateUser(user, /* Provide the ID of the user updating the record );
  }

  // DELETE CONTROLLER
  @Delete('/delete/{user_id}')
  public async deleteUser(@Path('user_id') user_id: number) {
    return deleteUser(user_id);
  }

}
*/

