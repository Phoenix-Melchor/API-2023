import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { IUser} from './user.service';
import express from 'express'

const router = express.Router()

router.get('/get', (_req, res) => {
  res.send('getting user')
  //res.send(readUser())
})

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

