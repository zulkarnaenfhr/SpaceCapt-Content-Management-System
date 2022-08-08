import { Sequelize } from "sequelize";

const db = new Sequelize("spacecapt_content_management_system", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;
