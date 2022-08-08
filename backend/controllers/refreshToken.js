import Users from "../models/usersModels.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        // cek dulu apakah refreshToken ada
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);

        // kalau ada baru cari datanya
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken,
            },
        });
        if (!user[0]) return res.sendStatus(403);

        // jika data ditemukan lakukan verifikasi
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => {
            if (err) return res.sendStatus(403);

            // jika cocock, buat accessToken yang baru
            const userName = user[0].username;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({ userName, name, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "15s",
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
};
