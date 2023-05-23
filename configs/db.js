import { Sequelize } from "sequelize";

const db = new Sequelize("biodata_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
