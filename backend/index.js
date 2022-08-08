import express from "express";
import db from "./config/Database.js";
import UsersRouter from "./routes/Users.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("Database Online");
} catch (error) {
    console.log(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(UsersRouter);

app.listen(5000, () => console.log("Server running on 5000"));
