const db = require("../models");
const Job = db.job;
const Skill = db.skill;

exports.findAllByUserId = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    res.status(400).send({
      message: "User ID is required",
    });
    return;
  }

  try {
    const jobs = await Job.findAll({
      where: { userId },
      include: [
        {
          model: Skill,
          as: "skills",
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    res.send(jobs);
  } catch (error) {
    res.status(500).send({
      message: "Error fetching jobs for user with ID: " + userId,
    });
  }
};

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.company) {
    res.status(400).send({
      message: "Name and company are required!",
    });
    return;
  }

  // Create a job
  const job = {
    name: req.body.name,
    company: req.body.company,
    desc: req.body.desc,
    location: req.body.location,
    events: req.body.events,
    activities: req.body.activities,
    position: req.body.position,
    salary: req.body.salary,
    userId: req.body.userId,
  };

  // Save job in the database
  try {
    const createdJob = await Job.create(job);
    const skills = req.body.skills;

    if (skills && skills.length > 0) {
      const createdSkills = await Promise.all(
        skills.map((skillName) =>
          Skill.findOrCreate({ where: { name: skillName } })
        )
      );
      console.log("Created Skills:", createdSkills);
      await createdJob.setSkills(createdSkills.map(([skill]) => skill));
    }

    const jobWithSkills = await Job.findOne({
      where: { id: createdJob.id },
      include: [
        {
          model: Skill,
          as: "skills",
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    const jobWithSkillsData = jobWithSkills.get({ plain: true });
    jobWithSkillsData.skills = jobWithSkillsData.skills.map(
      (skill) => skill.name
    );
    console.log("Job with Skills (formatted):", jobWithSkillsData);
    res.send(jobWithSkillsData);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the job.",
    });
  }
};
