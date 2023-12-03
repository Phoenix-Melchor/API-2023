import { Movies } from '@entity/movies';
import { PurchaseDet } from '@entity/purchasedetails';
import { Sale } from '@entity/sale';
import { profileEnd } from 'console';
import e from 'express';
import { AppDataSource } from 'src/database/db';

const purchasedetRepo = AppDataSource.getRepository(PurchaseDet)
const moviesrepo = AppDataSource.getRepository(Movies)

export interface IPurchaseDet {
    product: string;
    order_num: string;
    creation_user: string;
    update_date: string;
}


// CREATE SERVICE
export const createPurchaseDet = async (purchasedet: IPurchaseDet) => {
  try {
    const newPurchasedet = new PurchaseDet();
    let order_num = ''
    if(purchasedet.order_num){
      newPurchasedet.order_num = purchasedet.order_num
    }
    else{
      for (let i = 0; i < 15; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        order_num += randomNumber
      }
      newPurchasedet.order_num = order_num;
    }

    newPurchasedet.product = purchasedet.product;
    newPurchasedet.creation_user = purchasedet.creation_user;
    newPurchasedet.update_date = purchasedet.update_date;

    return await newPurchasedet.save();
  } catch (e) {
    console.error(e);
  }
};

//READ SERVICE
export const readPurchaseDet = async (id?: number) => {
  try {
    if(id){return await purchasedetRepo.findOne({where: {id: id}})}
    else{return await purchasedetRepo.find();}
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener usuarios de la base de datos');
  }
};

// UPDATE SERVICE
export const updatePurchaseDet = async (id: number, purchase: IPurchaseDet) => {
  try {
    const foundPurchasedet = await PurchaseDet.findOne({ where: {id: id} });
    if (!foundPurchasedet) return { message: 'User not found!' };

    foundPurchasedet.product = purchase.product;
    foundPurchasedet.order_num = purchase.order_num;
    foundPurchasedet.creation_user = purchase.creation_user;
    foundPurchasedet.update_date = purchase.update_date;
    
    return await foundPurchasedet.save();
  } catch (e) {
    console.error(e);
  }
};

// DELETE SERVICE
export const deletePurchaseDet = async (userId: number) => {

};