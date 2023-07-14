import Express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../Models/UserModel.js";
import { generateToken, isAuth } from "../utiles.js";

const userRoutes = Express.Router();

userRoutes.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Credentials" });
  })
);

userRoutes.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    try {
      const user = await newUser.save();
    } catch (error) {
      res.status(400).send({ message: "email already registered" });
    }
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  })
);

//test if isAuth middleware is working
userRoutes.get("/", isAuth, async (req, res) => {
  res.status(200).send({ message: "OK" });
});

export default userRoutes;
