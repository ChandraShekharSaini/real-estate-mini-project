import Users from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import errorHandler from '../utilis/error.js';
import LoginMailer from '../Nodemailer/LoginNodeMailer.js'
import SignupMailer from '../Nodemailer/nodemailerSignup.js'


export const postSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log("i am here inside", password);
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new Users({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    SignupMailer(newUser);
    res.status(201).json("User created successfully!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getSignin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await Users.findOne({ email });
    console.log(validUser._id);
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    LoginMailer(rest)
    res
      .cookie("access_token", token, { httpOnly: true ,  maxAge: 2000 })

      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const postGoogleIn = async (req, res, next) => {
  console.log("google");

  try {
    const user = await Users.findOne({ email: req.body.email });
    console.log("user", user);
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      LoginMailer(rest);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new Users({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      console.log("newUser", newUser);
      await newUser.save();
      LoginMailer(newUser);
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  console.log("signout");
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};


