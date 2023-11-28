import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route, Tags } from 'tsoa';
import { createuser, deleteUser, readUsers, updateUser } from './user.service';
import express from 'express'

const router = express.Router()

router.get('/:id?', async (_req, res) => {
  try {
    let users = null
    if (_req?.params?.id){users = await readUsers(Number(_req?.params?.id))}
    else {users = await readUsers();}
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const user = await createuser(data ,1);
    res.json(user)
  }
  catch(error){
    console.error('Error al agregar usuario', error);
    res.status(500).send('Error al agregar usuario');
  }
})

router.put('/update/:id', async (_req, res) => {
  try{
    const data = _req.body
    const user = await updateUser(Number(_req.params.id), data)
    res.json(user)
  }
  catch(error){
    console.error('Error al actualizar usuario', error);
    res.status(500).send('Error al actualizar usuario');
  }
})

router.delete('/remove/:id', (_req, res) => {
  try{
    const userd = deleteUser(Number(_req.params.id))
    res.json(userd)
  }
  catch(error){
    console.error('Error al eliminar usuario', error);
    res.status(500).send('Error al eliminar usuario')
  }
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

