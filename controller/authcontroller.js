 
import jwt from "jsonwebtoken";
 
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import UserModel from "../model/authmodel.js";
 
dotenv.config();

const SECRET_KEY = process.env.TOKEN_SECRET_KEY;

export const userSignup = async (req, res) => {
  try {
    const {name, email, password } = req.body;
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(401).json({ message: "User Already exist!" });
    }
    const hasedPassword = bcrypt.hashSync(password, 4);
    const newUser = new UserModel({
      name,
      email,
      password: hasedPassword,
    });

    await newUser.save();

    res.status(200).json({ user: req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      const match = await bcrypt.compare(password, existUser.password);
      if (match) {
        const token = jwt.sign({ id: existUser._id }, SECRET_KEY);

        res
          .status(200)
          .json({ message: "Login successful.", token });
      } else {
        return res.status(401).json({ message: "User not exist" });
      }
    } else {
      return res.status(401).json({ message: "User not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


 