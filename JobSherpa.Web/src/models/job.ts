export { Job };
class Job {
  id: string;
  name: string;
  company: string;
  desc: string;
  location: string;
  events: string[];
  activities: string[];
  position: string;
  salary: string;
  skills: string[];
  jobDate: Date;

  constructor(
    id: string,
    name: string,
    company: string,
    desc: string,
    location: string,
    events: string[],
    activities: string[],
    position: string,
    salary: string,
    skills: string[],
    jobDate: Date
  ) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.desc = desc;
    this.location = location;
    this.events = events;
    this.activities = activities;
    this.position = position;
    this.salary = salary;
    this.skills = skills;
    this.jobDate = jobDate;
  }
}
