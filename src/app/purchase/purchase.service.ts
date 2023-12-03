import { Movies } from '@entity/movies';
import { Purchase } from '@entity/purchase';
import { AppDataSource } from 'src/database/db';
import { PurchaseDet } from '../../database/entity/purchasedetails';

const purchaseRepo = AppDataSource.getRepository(Purchase)
const purchasedet = AppDataSource.getRepository(PurchaseDet)


export interface IPurchase {
    id: number;
    description: string;  
    client_name: string;
    total: string;
    total_products: string;
    creation_date: string;
    creation_user: number;
    update_date: string;
    update_user: string;
    active: number;
    purchase_details: number;
    
}


// CREATE SERVICE
export const createPurchase = async (purchase: IPurchase) => {
  try {
    const newPurchase = new Purchase();
    newPurchase.description = purchase.description;
    newPurchase.client_name = purchase.client_name;
    newPurchase.total = purchase.total;
    newPurchase.total_products = purchase.total_products;
    newPurchase.creation_date = purchase.creation_date;
    newPurchase.creation_user = purchase.creation_user;
    newPurchase.update_date = purchase.update_date;
    newPurchase.update_user = purchase.update_user;
    newPurchase.active = purchase.active;
    newPurchase.purchase_details = purchase.purchase_details;

    return await newPurchase.save();
  } catch (e) {
    console.error(e);
  }
};

//READ SERVICE
export const readPurchase = async (id?: number) => {
  try {
    if(id){return await purchaseRepo.findOne({where: {id: id}})}
    else{return await purchaseRepo.find();}
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener compras de la base de datos');
  }
};

// UPDATE SERVICE
export const updatePurchase = async (id: number, purchase: IPurchase) => {
  try {
    const foundPurchase = await Purchase.findOne({ where: {id: id} });
    if (!foundPurchase) return { message: 'Purchase not found!' };

    foundPurchase.description = purchase.description;
    foundPurchase.client_name = purchase.client_name;
    foundPurchase.total = purchase.total;
    foundPurchase.total_products = purchase.total_products;
    foundPurchase.creation_date = purchase.creation_date;
    foundPurchase.creation_user = purchase.creation_user;
    foundPurchase.update_date = purchase.update_date;
    foundPurchase.update_user = purchase.update_user;
    foundPurchase.active = purchase.active;
    foundPurchase.purchase_details = purchase.purchase_details;
    
    return await foundPurchase.save();
  } catch (e) {
    console.error(e);
  }
};

// DELETE SERVICE
export const deletePurchase = async (purchaseId: number) => {
  try {
    const foundPurchase = await Purchase.findOne({ where: { id: purchaseId } });
    if (!foundPurchase) return { message: 'Purchase not found' };
    foundPurchase.active = 0
    return await foundPurchase.save();
  } catch (e) {
    console.error(e);
  }
};
