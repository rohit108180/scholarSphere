import express from "express";
import {
  createJob,
  deleteJob,
  getAllJob,
  showStats,
  updateJob,
} from "../controller/jobController.js";
const jobRouter = express.Router();

jobRouter.route("/").post(createJob).get(getAllJob);

// it's important to place stats before id because stats can be considered as id;
jobRouter.route("/stats").get(showStats);
jobRouter.route("/:id").delete(deleteJob).patch(updateJob);

export default jobRouter;
