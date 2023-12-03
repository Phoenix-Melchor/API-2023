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
    //Header
    await userRepo.findOne({where: {name: data.username}})
    .then(foundUser => {
      if(foundUser){
        foundUser.password
      }
    })
    
    //Payload

    //Verify Signature

  } catch (e) {
    console.error(e);
  }
};