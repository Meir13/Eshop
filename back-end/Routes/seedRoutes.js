import Express from "express";
import Product from "../Models/ProductModel.js";
import Order from "../Models/OrderModel.js";
import User from "../Models/UserModel.js";
import data from "../data.js";

export const seedRouter = Express.Router();

seedRouter.get("/", async (req, res) => {
  try {
    await Product.deleteMany({}); //delete all products
    await Order.deleteMany({}); //delete all products
    await User.deleteMany({}); //delete all products

    const createdProducts = await Product.insertMany(data.products);
    const createdUsers = await User.insertMany(data.users);

    res.send({ createdProducts, createdUsers });
  } catch (error) {
    console.log("failed to update " + error.message);
  }
});
