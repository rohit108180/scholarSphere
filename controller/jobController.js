const createJob =async (req, res) =>{
      res.send("job created");
}

const deleteJob =async (req, res) =>{
      res.send("job deleteJob");
}
const updateJob =async (req, res) =>{
      res.send("job updateJob");
}
const getAllJob =async (req, res) =>{
      res.send("job getAllJob");
}
const showStats =async (req, res) =>{
      res.send("job showStats");
}

export { createJob, updateJob, showStats, deleteJob,getAllJob}