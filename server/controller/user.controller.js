import Users from "../models/user.model.js"
import Listing from "../models/Listing.model.js"
import errorHandler from "../utilis/error.js"
import bcrypt from "bcryptjs"


export const postUpdateUser = async (req, res, next) => {
 
  // if (req.user.id !== req.params.id)
  //   return next(errorHandler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  // console.log("deleted");
  // console.log("deleted", req.user.id);
  // console.log("deleted", req.params.id);
  // if (req.user.id !== req.params.id)
  //   return next(errorHandler(401, "You can only delete your own account!"));
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserListing = async (req, res, next) => {
  // console.log(req.user.id);
 
  if (true) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      if (!listings) res.send("Listing not Present");

      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};

export const getUserData = async (req, res, next) => {
  try {
    let userData = await Users.find({ _id: req.params.id });
    if (!userData) return next(errorHandler(404, "User not found"));
    const { password, ...rest } = userData[0]._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
