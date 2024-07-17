import express from "express";
import { addSales, getSalesByIdIUser } from "../controllers/sale-controller.js";

const router = express.Router();

router.post("/checkout", addSales);
router.get("/get-sales/:id", getSalesByIdIUser);

export default router;
