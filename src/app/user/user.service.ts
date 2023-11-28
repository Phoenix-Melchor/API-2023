import { User } from '@entity/user';
import { AppDataSource } from 'src/database/db';

const userRepo = AppDataSource.getRepository(User)


export interface IUser {
  name: string;
  email: string;
  password: string;
  creation_date: string;
  update_date: string;
  update_User: number;
  last_seen: string; 
  gender: string;
  active: number;
  updatedByid: User;
}


// CREATE SERVICE
export const createuser = async (user: IUser, createdByUserId: number) => {
  try {
    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.creation_date = user.creation_date;
    newUser.update_date = user.update_date;
    newUser.update_User = createdByUserId;
    newUser.last_seen = user.last_seen;
    newUser.gender = user.gender;
    newUser.active = user.active;

    return await newUser.save();
  } catch (e) {
    console.error(e);
  }
};

//READ SERVICE
export const readUsers = async (id?: number) => {
  try {
    if(id){return await userRepo.findOne({where: {id: id}})}
    else{return await userRepo.find();}
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener usuarios de la base de datos');
  }
};

// UPDATE SERVICE
export const updateUser = async (id: number, user: IUser) => {
  try {
    const foundUser = await User.findOne({ where: {id: id} });
    if (!foundUser) return { message: 'User not found!' };

    foundUser.name = user.name;
    foundUser.email = user.email;
    foundUser.password = user.password;
    foundUser.creation_date = user.creation_date;
    foundUser.update_date = user.update_date;
    foundUser.last_seen = user.last_seen;
    foundUser.gender = user.gender;
    foundUser.active = user.active;
    
    return await foundUser.save();
  } catch (e) {
    console.error(e);
  }
};

// DELETE SERVICE
export const deleteUser = async (userId: number) => {
  try {
    const foundUser = await User.findOne({ where: { id: userId } });
    if (!foundUser) return { message: 'User not found' };
    foundUser.active = 0
    return await foundUser.save();
  } catch (e) {
    console.error(e);
  }
};
