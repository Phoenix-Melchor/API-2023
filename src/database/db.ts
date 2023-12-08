import { Movies } from "@entity/movies";
import { Purchase } from "@entity/purchase";
import { PurchaseDet } from "@entity/purchasedetails";
import { Role } from "@entity/role";
import { Sale } from "@entity/sale";
import { User } from "@entity/user";
import "reflect-metadata"
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "3.129.21.138",
    username: "jamz",
    password: "Phoenix-Melchor14",
    database: "apidb",
    port: 3306,
    entities:[Movies, Role, User, Sale,Purchase, Purchase,PurchaseDet],
    logging: true,
    synchronize: false
})