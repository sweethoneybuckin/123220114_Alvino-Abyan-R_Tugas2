import { Sequelize } from "sequelize";

const db = new Sequelize('ptcc1', 'root','password',{
    host: 'localhost',
    dialect : 'mysql'
});

export default db;