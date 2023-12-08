import { AppDataSource } from 'src/database/db';
import * as jwt from 'jsonwebtoken'
import { User } from '@entity/user';

const userRepo = AppDataSource.getRepository(User)

export interface ILogin {
    username: string;
    password: string;
}


// CREATE SERVICE
export const login = async (data: ILogin) => {
  try {
    const username = await userRepo.findOne({where: {name: data.username}})
    if (!username) {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }

    const ValidPassword = username.password == data.password
    if(!ValidPassword){throw new Error('Nombre de usuario o contraseña incorrectos')}
    
    const token = jwt.sign({userId: username.id, username: username.name}, '83046127603128', {expiresIn: '1h'})

    return {token}

  } catch (error) {
    console.error('Error al Iniciar Sesion:')
    console.error(error);
  }
};