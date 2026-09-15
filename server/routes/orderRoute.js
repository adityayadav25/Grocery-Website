import express from "express"
import authUser from "../middlerware/authUser.js";
import { getAllOrders, getUserOrder, placeOrderCOD, placeOrderStripe } from "../controllers/orderController.js";
import authSeller from "../middlerware/authSeller.js";

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.get('/user', authUser, getUserOrder)
orderRouter.get('/seller', authSeller, getAllOrders)
orderRouter.post('/stripe', authUser, placeOrderStripe)


export default orderRouter;