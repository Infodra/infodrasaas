export type JobStatus = "Open" | "Closed" | "Paused";

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: "Full Time" | "Contract" | "Hybrid" | "Remote";
  experience: string;
  salary: string;
  skills: string[];
  openings: number;
  applications: number;
  status: JobStatus;
  postedDate: string;
};

export type CandidateStatus = "New" | "Shortlisted" | "Rejected" | "Interview";

export type Candidate = {
  id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  currentSalary: string;
  expectedSalary: string;
  noticePeriod: string;
  skills: string[];
  status: CandidateStatus;
  avatarClass: string;
  initials: string;
  education: string[];
  projects: string[];
  timeline: { year: string; title: string; company: string }[];
};

export type Application = {
  id: string;
  candidateId: string;
  jobId: string;
  source: "LinkedIn" | "Referral" | "Career Page" | "Naukri" | "Indeed";
  appliedDate: string;
  status: CandidateStatus;
};
