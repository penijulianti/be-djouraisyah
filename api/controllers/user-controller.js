import { pool } from "../config/db.js";

// Untuk daftar akun atau registrasi
export const registerAccount = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
    ); // Ambil insertedId dari result dan konversi jika perlu
    const insertedId = result.insertId;
    const response = {
      id: insertedId.toString(),
      username,
      email,
    };
    res.status(201).json({ msg: "Pendaftaran berhasil", data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const loginAccount = async (req, res) => {
  const { username, password } = req.body;

  // Validasi data
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username dan password harus diisi." });
  }

  try {
    const result = await pool.execute(
      `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
    );

    if (result.length === 1) {
      res.status(200).json({ msg: "Login berhasil.", user: result[0] });
    } else {
      res.status(401).json({ error: "Username atau password tidak valid." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal melakukan login." });
  }
};

// Untuk mendapatkan semua data user
export const getAllUser = async (_req, res) => {
  try {
    const result = await pool.execute("SELECT * FROM users");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
