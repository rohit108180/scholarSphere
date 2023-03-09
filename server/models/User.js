import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

// import { hash } from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide name "],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide email "],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "please provide valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Please Provide Password "],
      minlength: 6,
      // select : false
    },
    lastname: {
      type: String,
      // minlength : 3,
      maxlength: 20,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      maxlength: 20,
      trim: true,
      default: "",
    },

    profilePicture: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum  : ['Student', 'Faculty'],
      required: true,
      default: "Student",
    },
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
    researchPapers: [{ type: Schema.Types.ObjectId, ref: "Research" }],
    githubLink: { type: String, default: "" },
    googleScholarProfileLink: { type: String, default: "" },
    linkedIn: { type: String, default: "" },
    intstagram: { type: String, default: "" },
    resumeId: {
      type: String,
      default: "",
    },
    userBio: {
      type: String,
      default: "",
    },
    skillSet: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skills",
      },
    ],
    accomplishments: [
      {
        title: String,
        description: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    workExperience: [
      {
        type: Schema.Types.ObjectId,
        ref: "WorkExperience",
      },
    ],
    bookmarksResearch: [
      {
        type: Schema.Types.ObjectId,
        ref: "Research",
      },
    ],
    bookmarksProject: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    organisation: [
      {
        type: Schema.Types.ObjectId,
        ref: "Organisation",
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
