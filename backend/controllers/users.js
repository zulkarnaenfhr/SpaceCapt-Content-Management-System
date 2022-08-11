import Users from "../models/usersModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ["username", "email", "name"],
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

export const registerUsers = async (req, res) => {
    const { username, password, confirmPassword, email, name } = req.body;

    const count = await Users.count({ where: { username: username } });

    if (count != 0)
        return res.status(400).json({
            msg: "Username Exist",
        });

    if (password !== confirmPassword)
        return res.status(400).json({
            msg: "Password and Confirm Password not Match",
        });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            password: hashPassword,
            email: email,
            name: name,
        });
        res.status(200).json({
            msg: "successful registration",
        });
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = async (req, res) => {
    try {
        // cek if username ini ada apa engga
        const user = await Users.findAll({
            where: {
                username: req.body.username,
            },
        });

        // lakukan komparasi password
        const match = await bcrypt.compare(req.body.password, user[0].password);

        // kalau password salah keluarin status salah
        if (!match)
            return res.status(400).json({
                msg: "Wrong Password",
            });

        // catat semua data buat dimasukkin ke dalam access token dan refresh token
        const username = user[0].username;
        const name = user[0].name;
        const email = user[0].email;

        // buat access token
        const accessToken = jwt.sign({ username, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "20s",
        });

        const refreshToken = jwt.sign({ username, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d",
        });

        // update access token buat masuk ke dalam database
        await Users.update(
            {
                refresh_token: refreshToken,
            },
            {
                where: {
                    username: username,
                },
            }
        );

        // buat set cookie di browser, maxages berguna jika lebih dari waktu yang ditentukan maka cookie akan otomatis kehapus
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        });

        // responnya
        res.json({ accessToken });
    } catch (error) {
        res.status(400).json({
            msg: "Username Doesn't Exist",
        });
    }
};

export const logoutUser = async (req, res) => {
    // cek refresh token yang ada
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);

    // cari data
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken,
        },
    });
    if (!user[0]) return res.sendStatus(204);

    // jika data ditemukan set refresh_token to null
    const userName = user[0].username;
    await Users.update(
        { refresh_token: null },
        {
            where: {
                username: userName,
            },
        }
    );

    // clear cookie browser
    res.clearCookie("refreshtoken");
    return res.sendStatus(200);
};
