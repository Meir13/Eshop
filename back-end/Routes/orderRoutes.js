import Express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils.js";
import Product from "../Models/ProductModel.js";
import Order from "../Models/OrderModel.js";
import User from "../Models/UserModel.js";
import data from "../data.js";

export const orderRouter = Express.Router();

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const newOrder = new Order({
        orderItems: req.body.orderItems.map((item) => ({
          ...item, //may be a problem
          product: item._id,
        })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const order = await newOrder.save();
      res.status(201).send({ message: "New order created", order });
    } catch (error) {
      res.sendStatus(500);
    }
  })
);
