import mongoose from "mongoose";

const PostSchema =  new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
  poster: { type: String },
  poster_bio: { type: String },
  profile: { type: String },
  feed_text: { type: String },
  feed_html: { type: String },
  href_map: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now },
  status: { type: String},
  tags : {type: String},
  summary : {type : String},
  reason: {type: String}
});
export default mongoose.model("linx_post", PostSchema);
