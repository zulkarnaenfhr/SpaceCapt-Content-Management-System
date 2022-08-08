import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    // buat mengambil token dulu buat verify
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // kalau token tidak ditemukan
    if (token == null) return res.sendStatus(401);

    // untuk melakukan verifikasi, jika verifikasi berhasil lanjut
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        next();
    });
};
