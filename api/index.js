import express from "express";
import "dotenv/config";
import cors from "cors";

import UserRoute from "./routes/user-route.js";
import CartRoute from "./routes/cart-route.js";
import SaleRoute from "./routes/sale-route.js";

const app = express();

app.use(cors());

app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.use("/user", UserRoute);
router.use("/cart", CartRoute);
router.use("/sale", SaleRoute);

const port = process.env.API_PORT || 5001;
app.listen(port, "0.0.0.0", () => {
  console.log('App listening on port 5001');
  dbConnection.authenticate().then(() => {
    console.log('database terhubung')
  }).catch((err) => {
    console.log('terjadi error saat koneksi ke database', err)
    process.exit()
  })
});

/*app.listen(port, "0.0.0.0", () =>
  console.log("Server berhasil dijalankan.")
);
*/

