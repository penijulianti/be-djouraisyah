import "dotenv/config";
import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: viaduct.proxy.rlwy.net,
  port: 20727,
  user: root,
  password: AMHzkGHoUwLJuPwULvStMwGtPauOUzEY,
  database: railway,
});

pool
  .getConnection()
  .then(() => {
    console.log("Berhasil terhubung ke basis data.");
  })
  .catch((err) => {
    console.error("Gagal terhubung ke basis data:", err);
  });

// connect to remote db
const { Sequelize } = require('sequelize');
const db = new Sequelize('mysql://root:AMHzkGHoUwLJuPwULvStMwGtPauOUzEY@viaduct.proxy.rlwy.net:20727/railway'), {
  define: {
    timestamps: false
  }
});
