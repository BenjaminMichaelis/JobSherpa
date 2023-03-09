import { Job } from "@/job";
export { JobList };
const JobList: Job[] = [
  new Job(
    "1",
    "Software Engineer",
    "Google",
    "Develop software applications for clients",
    "San Francisco, CA",
    ["Submit Cover Letter on February 3", "Interview #1 on March 5"],
    ["Submitted Resume on January 8th", "Code Reviews", "Meetings"],
    "Full-time",
    "$120,000",
    ["SQL", "React", "C#", "C++"]
  ),
  new Job(
    "2",
    "Waitress",
    "The Restaurant",
    "Serve food and drinks to customers",
    "Los Angeles, CA",
    ["Happy Hour", "Customer Complaint"],
    ["Taking Orders", "Clearing Tables", "Handling Cash"],
    "Part-time",
    "$15/hour",
    ["Customer Service", "Communication"]
  ),
  new Job(
    "3",
    "Basketball Player",
    "Chicago Bulls",
    "Play basketball games for the team",
    "Chicago, IL",
    ["Home Game", "Away Game"],
    ["Practicing", "Watching Film", "Working Out"],
    "Full-time",
    "$30 million/year",
    ["Basketball Skills", "Physical Fitness"]
  ),
  new Job(
    "4",
    "Student",
    "WSU",
    "Attend classes and complete coursework",
    "Pullman, WA",
    ["Midterm Exam", "Finals Week"],
    ["Studying", "Writing Papers", "Participating in Group Projects"],
    "Part-time",
    "$0",
    ["Time Management", "Critical Thinking"]
  ),
];
