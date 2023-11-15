import { User } from '@entity/user';

export interface IUser {
  name: string;
  email: string;
  password: string;
  creation_date: Date;
  update_date: Date;
  last_seen: Date;
  gender: string;
  active: boolean;
  updatedByid: User;
}

// CREATE SERVICE
export const createUser = async (user: IUser/*, createdByUserId: number*/) => {
  try {
    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.creation_date = user.creation_date;
    newUser.update_date = user.update_date;
    newUser.last_seen = user.last_seen;
    newUser.gender = user.gender;
    newUser.active = user.active;
    newUser.updatedByid = user.updatedByid;

    return await newUser.save();
  } catch (e) {
    console.error(e);
  }
};

// READ SERVICE
export const readUser = async (userId?: number) => {
  try {
    if (userId) {
      return await User.findOne({
        where: { id: userId },
        relations: ['updatedByid'],
      });
    } else {
      return await User.find({ relations: ['updatedByid'] });
    }
  } catch (e) {
    console.error(e);
  }
};

// UPDATE SERVICE
export const updateUser = async (user: { id: number } & IUser) => {
  try {
    const foundUser = await User.findOne({ where: { id: user.id } });
    if (!foundUser) return { message: 'User not found!' };

    foundUser.name = user.name;
    foundUser.email = user.email;
    foundUser.password = user.password;
    foundUser.creation_date = user.creation_date;
    foundUser.update_date = user.update_date;
    foundUser.last_seen = user.last_seen;
    foundUser.gender = user.gender;
    foundUser.active = user.active;
    foundUser.updatedByid = user.updatedByid;

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

    return await foundUser.remove();
  } catch (e) {
    console.error(e);
  }
};
