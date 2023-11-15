import { Movies } from "@entity/movies";
import { Role } from "@entity/role";
import { Sale } from "@entity/sale";
import { User } from "@entity/user";
import "reflect-metadata"
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "Phoenix-Melchor14",
    database: "jadfaa",
    port: 3306,
    entities:[Movies, Role, User, Sale],
    logging: true,
    synchronize: false
})