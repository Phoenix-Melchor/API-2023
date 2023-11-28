import { Sale } from '@entity/sale';
import { AppDataSource } from 'src/database/db';

const saleRepo = AppDataSource.getRepository(Sale)


export interface ISale {
    id: number;
    name: string;
    description: string;
    price: string;
    sale_start: string;
    sale_end: string;
    duration: string;
    release_date: string;
    active: number;
}


// CREATE SERVICE
export const createSale = async (sale: ISale) => {
  try {
    const newSale = new Sale();
    newSale.name = sale.name;
    newSale.description = sale.description;
    newSale.price = sale.price;
    newSale.sale_start = sale.sale_start;
    newSale.sale_end = sale.sale_end;
    newSale.duration = sale.duration;
    newSale.release_date = sale.release_date;
    newSale.active = sale.active;

    return await newSale.save();
  } catch (e) {
    console.error(e);
  }
};

//READ SERVICE
export const readSale = async (id?: number) => {
  try {
    if(id){
        return await saleRepo.findOne({where: {id: id}})
    }
    else{
        return await saleRepo.find();
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener usuarios de la base de datos');
  }
};

// UPDATE SERVICE
export const updateSale = async (id: number, sale: ISale) => {
  try {
    const foundsale = await Sale.findOne({ where: {id: id} });
    if (!foundsale) return { message: 'Sale not found!' };

    foundsale.name = sale.name;
    foundsale.description = sale.description;
    foundsale.price = sale.price;
    foundsale.sale_start = sale.sale_start;
    foundsale.sale_end = sale.sale_end;
    foundsale.duration = sale.duration;
    foundsale.release_date = sale.release_date;
    foundsale.active = sale.active;
    
    return await foundsale.save();
  } catch (e) {
    console.error(e);
  }
};

// DELETE SERVICE
export const deleteSale = async (saleId: number) => {
  try {
    const foundsale = await Sale.findOne({ where: { id: saleId } });
    if (!foundsale) return { message: 'Sale not found' };
    foundsale.active = 0
    return await foundsale.save();
  } catch (e) {
    console.error(e);
  }
};