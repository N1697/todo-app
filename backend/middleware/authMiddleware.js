import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //Step 1: Check if the authorization object is in the headers of the request
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Step 2: Get the token from the authorization object
      token = req.headers.authorization.split(" ")[1];

      //Step 3: Decode the token to get the payload which is the id of the user
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      //Step 4: Use the payload to find the user and assign it to the user of the request
      req.user = await User.findById(decoded.id);

      //Step 5: Call the next middleware
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }

  //Step 6: Check if there's no token sent with the request
  if (!token) {
    res.status(400);
    throw new Error("Token not found in the request");
  }
});

export default protect;
