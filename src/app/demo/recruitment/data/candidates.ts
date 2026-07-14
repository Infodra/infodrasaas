import type { Candidate, CandidateStatus } from "../types";

const names = [
  "Arun Kumar",
  "Nivetha Raj",
  "Siddharth Menon",
  "Priya Natarajan",
  "Rahul Verma",
  "Sneha Iyer",
  "Karthik S",
  "Meera Balan",
  "Aman Tiwari",
  "Harini K",
  "Rohit B",
  "Divya Narang",
  "Vignesh R",
  "Aisha Khan",
  "Deepak N",
  "Pooja Sharma",
  "Nikhil Rao",
  "Kavya M",
  "Suraj Patil",
  "Anita George",
  "Vivek Gupta",
  "Lavanya Prasad",
  "Abhishek Jain",
  "Monica D",
  "Gokul Raj",
];

const roles = [
  "Frontend Engineer",
  "Backend Engineer",
  "React Developer",
  "AI Engineer",
  "DevOps Engineer",
  "Mechanical Engineer",
  "Automation Engineer",
  "Electrical Engineer",
  "Data Analyst",
  "Recruiter",
];

const locations = [
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Noida",
  "Coimbatore",
  "Remote",
];

const skillsList = [
  ["React", "TypeScript", "Tailwind"],
  ["Node.js", "PostgreSQL", "Redis"],
  ["Python", "TensorFlow", "LLM"],
  ["AWS", "Docker", "Kubernetes"],
  ["SolidWorks", "AutoCAD", "BOM"],
  ["PLC", "SCADA", "Sensors"],
  ["EPLAN", "Power Systems", "Panels"],
  ["SQL", "Power BI", "Excel"],
];

const avatarClasses = [
  "bg-gradient-to-br from-blue-500 to-indigo-600",
  "bg-gradient-to-br from-cyan-500 to-blue-600",
  "bg-gradient-to-br from-emerald-500 to-teal-600",
  "bg-gradient-to-br from-amber-500 to-orange-600",
  "bg-gradient-to-br from-pink-500 to-rose-600",
];

const statuses: CandidateStatus[] = ["New", "Shortlisted", "Rejected", "Interview"];

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const candidates: Candidate[] = names.map((name, index) => {
  const years = 2 + (index % 8);
  const current = 5 + index;
  const expected = current + 2;

  return {
    id: `CAN-${String(index + 1).padStart(3, "0")}`,
    name,
    role: roles[index % roles.length],
    experience: `${years} years`,
    location: locations[index % locations.length],
    currentSalary: `${current} LPA`,
    expectedSalary: `${expected} LPA`,
    noticePeriod: `${15 + (index % 4) * 15} days`,
    skills: skillsList[index % skillsList.length],
    status: statuses[index % statuses.length],
    avatarClass: avatarClasses[index % avatarClasses.length],
    initials: initials(name),
    education: [
      "B.E / B.Tech",
      "Relevant certifications in role-specific tools",
    ],
    projects: [
      "Enterprise digital transformation project",
      "Automation and process optimization initiative",
    ],
    timeline: [
      {
        year: "2023-Present",
        title: "Senior Associate",
        company: "ModernStack Systems",
      },
      {
        year: "2021-2023",
        title: "Software Engineer",
        company: "Nexa Digital",
      },
      {
        year: "2019-2021",
        title: "Junior Engineer",
        company: "BlueOrbit Tech",
      },
    ],
  };
});
