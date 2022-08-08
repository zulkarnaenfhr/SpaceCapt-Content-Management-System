import express from "express";
import { refreshToken } from "../controllers/refreshToken.js";
import { getAllUsers, loginUser, logoutUser, registerUsers } from "../controllers/users.js";
import { verifyToken } from "../middleware/verifyToken.js";

const UsersRouter = express.Router();

UsersRouter.get("/users", verifyToken, getAllUsers);
UsersRouter.post("/users", registerUsers);
UsersRouter.post("/login", loginUser);
UsersRouter.get("/token", refreshToken);
UsersRouter.delete("/logout", logoutUser);

export default UsersRouter;
