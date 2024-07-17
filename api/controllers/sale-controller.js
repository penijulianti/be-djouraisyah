import { pool } from "../config/db.js";

export const addSales = async (req, res) => {
  const {
    sales,
    name,
    phone_number,
    address,
    payment_method,
    shipping_method,
  } = req.body;
  try {
    for (const sale of sales) {
      const { id, id_user, product_name, price, quantity } = sale;
      await pool.query(
        `INSERT INTO sales 
        (id_user, product_name, price, quantity, name,
        phone_number, address, payment_method, shipping_method)
        VALUES (${id_user}, '${product_name}', 
        ${price}, ${quantity}, '${name}', '${phone_number}', 
        '${address}', '${payment_method}', '${shipping_method}')`
      );
      await pool.query(`DELETE FROM carts WHERE id = ${id}`);
    }
    res.status(200).json({ msg: "Pesanan telah berhasil dibuat" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

export const getSalesByIdIUser = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM sales WHERE id_user = ${req.params.id}`
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
