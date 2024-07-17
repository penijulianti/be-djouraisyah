import { pool } from "../config/db.js";

export const getCartByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM carts WHERE id_user = ${req.params.id}`
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addToCart = async (req, res) => {
  const { id_user, product_name, price, quantity } = req.body;
  try {
    await pool.query(
      `INSERT INTO carts (id_user, product_name, price, quantity) 
      VALUES (${id_user}, '${product_name}', ${price}, ${quantity})`
    );
    res.status(200).json("Produk berhasil ditambahkan ke keranjang");
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    await pool.query(
      `UPDATE carts SET quantity = ${req.body.quantity} WHERE id = ${req.params.id}`
    );
    res.status(200).json({
      msg: "Keranjang berhasil di ubah",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    await pool.query(`DELETE FROM carts WHERE id = ${req.params.id}`);
    res.status(200).json({ msg: "Keranjang berhasil dihapus." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
