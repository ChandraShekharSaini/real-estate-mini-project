import Listing from "../models/Listing.model.js"
import errorHandler from "../utilis/error.js"

export const createListing = async (req, res, next) => {


  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const deleteListing = async (req, res, next) => {
  let listing = await Listing.findOne({ _id: req.params.id });
  if (!listing) return next(errorHandler(401, "Listing is not exist"));
  if (listing._id.toString() !== req.params.id) {
    return next(errorHandler(401, "You are not allowed to delete"));
  }

  try {
    let listing = await Listing.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {

  let listing = await Listing.findById({ _id: req.params.id });

  if (!listing) return next(errorHandler(401, "Listig not found"));

  // if (req.user.id !== listing.userRef) {
  //   return next(errorHandler(401, "You can onlt update your own listing"));
  // }

  try {
    const updateListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res
      .status(200)
      .json({ updateListing, message: "Listing updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
 
  try {
    let listing = await Listing.findById({ _id: req.params.id });
    if (!listing) return next(errorHandler(401, "Listing not found"));
 
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  // console.log("Limit",req.query.limit);
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let offer = req.query.offer;

    if (offer === undefined || offer === false) {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === false) {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === false) {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: "i" },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
