import { Job } from "../../../database/model/jobs.model.js";
import { AppErr } from "../../midleware/catcherr.js";

export const addJob = async (req, res, next) => {
  const { role, id } = req.user;
  console.log(id);
  if (role != "HR_company")
    return res.status(403).json({ message: "You are not allow" });
  let newjob = new Job(req.body);
  newjob.addedBy = id;
  await newjob.save();
  res.status(201).json({ message: "Job added successfully", newjob });
};
export const updateJob = async (req, res, next) => {
  const { idjob } = req.params;
  const { role, id } = req.user;
  let job = await Job.findById(idjob);

  // check if  user is hr and how added this job or not
  if (role != "HR_company" || job.addedBy.toString() != id)
    return res.status(403).json({ message: "You are not allow" });

  job = await Job.findByIdAndUpdate(idjob, req.body, { new: true });
  res.status(201).json({ message: "Job updated successfully", job });
};

export const getJobWithCompany = async (req, res, next) => {

  let jobs;
  if (Object.keys(req.query).length) {
      // make filteration for jobs
    const query = filterJobs(req.query);
    jobs = await Job.find(query).populate("company");
  } else {
      // find all jobs without filter
    jobs = await Job.find().populate("company");
  }

  if (jobs.length == 0) return next(new AppErr("no jobs found", 400));
  res.status(200).json({ message: "success", jobs });
};
export const getAllJobsForSpecificCompany = async (req, res, next) => {
  const { companyid } = req.params;
  let jobs = await Job.find({ company: companyid }).populate("addedBy");
  if (jobs.length == 0) return next(new AppErr("no jobs found", 400));
  res.status(200).json({ message: "success", jobs });
};

export const deleteJob = async (req, res, next) => {
  const { idjob } = req.params;
  const { role, id } = req.user;
  let job = await Job.findById(idjob);

  // check if  user is hr and how added this job or not
  if (role != "HR_company" || job.addedBy.toString() != id)
    return res.status(403).json({ message: "You are not allow" });

  await job.deleteOne();
  res.status(201).json({ message: "Job deleted successfully" });
};


// make function  filtertation for job
const filterJobs = (data) => {
  let query = {};

  if (data.workingTime)
    query.workingTime = { $regex: data.workingTime, $options: "i" };
  if (data.jobLocation)
    query.jobLocation = { $regex: data.jobLocation, $options: "i" };
  if (data.seniorityLevel)
    query.seniorityLevel = { $regex: data.seniorityLevel, $options: "i" };
  if (data.jobTitle) query.jobTitle = { $regex: data.jobTitle, $options: "i" };
  if (data.technicalSkills)
    query.technicalSkills = { $regex: data.technicalSkills, $options: "i" };

  return query;
};
