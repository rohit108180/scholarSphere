import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

// import

class customAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log("got the request");

  if (!name || !email || !password) {
    throw new customAPIError("Please Provide all the values");
  }

  const user = await User.create(req.body);
  const token = user.createJWT();

  user.password = undefined;
  res.status(StatusCodes.CREATED).json({ user, token });
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new customAPIError("Please Provide all the values");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("Invalid Credentials");
  const isMatch = await user.comparePassword(password);
  //   console.log("ismatch", isMatch);

  //   throw new Error("Invalid Credentials");
  if (!isMatch) throw new Error("Invalid Credentials");

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });

  console.log("login user");
};

const UpdateUser = async (req, res) => {
  console.log(req.body);

  let updatedUser = req.body;

  if (updatedUser.profilePhoto) {

    console.log("comming in this");
    const result = await cloudinary.uploader.upload(
      updatedUser.profilePhoto,
      {
        folder: "ScholarSphere/profilePicture",
        width: 150,
        crop: "scale",
      },
      function (error) {
        if (error) {
          console.log(error);
          res.status(400).json({ error });
        }
      }
    );

    delete updatedUser.profilePhoto;

    console.log("the new result", result);

    updatedUser.profilePicture = {
      public_id: result.public_id,
      url: result.secure_url,
    };

  }
  const result1 = await User.updateOne(
    { _id: updatedUser._id },
    { $set: updatedUser }
  );
  updatedUser.password = undefined;
  // Check if the user was found and updated successfully
  if (result1.matchedCount === 1 && result1.modifiedCount === 1) {
    res.status(StatusCodes.OK).json({ user: updatedUser });
  } else {
    res.status(StatusCodes.NOT_FOUND).send("User not found");
  }
};

export { UpdateUser, Register, Login };
