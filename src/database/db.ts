import { Movies } from "@entity/movies";
import { Role } from "@entity/role";
import { Sale } from "@entity/sale";
import { User } from "@entity/user";
import "reflect-metadata"
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 3306,
    entities:[Movies, Role, User, Sale],
    logging: true,
    synchronize: false
})