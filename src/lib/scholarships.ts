export type Scholarship = {
  id: string;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  scope: "Central" | "State" | "Private";
  tags: string[];
};

export const scholarships: Scholarship[] = [
  {
    id: "nsp-mcm",
    name: "Merit-cum-Means Scholarship",
    provider: "National Scholarship Portal",
    amount: "₹25,000 / year",
    deadline: "31 Oct 2026",
    scope: "Central",
    tags: ["Merit", "Need-based"],
  },
  {
    id: "inspire-she",
    name: "INSPIRE Scholarship (SHE)",
    provider: "Dept. of Science & Technology",
    amount: "₹80,000 / year",
    deadline: "15 Nov 2026",
    scope: "Central",
    tags: ["Science", "Merit"],
  },
  {
    id: "aicte-pragati",
    name: "AICTE Pragati Scholarship",
    provider: "AICTE",
    amount: "₹50,000 / year",
    deadline: "30 Nov 2026",
    scope: "Central",
    tags: ["Girls", "Technical"],
  },
  {
    id: "post-matric",
    name: "Post-Matric Scholarship (SC/ST)",
    provider: "State Welfare Department",
    amount: "₹15,000 / year",
    deadline: "20 Dec 2026",
    scope: "State",
    tags: ["Category", "Need-based"],
  },
  {
    id: "reliance-ug",
    name: "Reliance Foundation UG Scholarship",
    provider: "Reliance Foundation",
    amount: "Up to ₹2,00,000",
    deadline: "05 Jan 2027",
    scope: "Private",
    tags: ["Merit", "Undergraduate"],
  },
  {
    id: "tata-pankh",
    name: "Tata Capital Pankh Scholarship",
    provider: "Tata Capital",
    amount: "₹20,000 / year",
    deadline: "10 Jan 2027",
    scope: "Private",
    tags: ["Need-based", "Merit"],
  },
  {
    id: "hdfc-badhte",
    name: "HDFC Badhte Kadam Scholarship",
    provider: "HDFC Bank",
    amount: "Up to ₹1,50,000",
    deadline: "25 Jan 2027",
    scope: "Private",
    tags: ["Need-based", "School"],
  },
  {
    id: "pmsss",
    name: "PM's Special Scholarship (PMSSS)",
    provider: "AICTE",
    amount: "₹1,00,000 / year",
    deadline: "28 Feb 2027",
    scope: "Central",
    tags: ["J&K / Ladakh", "Undergraduate"],
  },
];
