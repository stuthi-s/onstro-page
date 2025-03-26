import CardGrid from "../CardGrid";

const workCulture = [
  {
    title: "Work-Life Balance",
    description: "We believe in a happy workplace focusing on both personal and professional development.",
    icon: "/icons/Work-Life-Balance.svg",
  },
  {
    title: "Diversity, Equity, and Inclusion",
    description: "We never allow our ethnic, cultural, or political differences to affect our work.",
    icon: "/icons/Diversity-Equity-and-Inclusion.svg",
  },
  {
    title: "Globally Competitive",
    description: "We don’t settle for anything less than international standards.",
    icon: "/icons/Globally-Competitive.svg",
  },
  {
    title: "Anti-Harassment Policy",
    description: "We have a strict zero-tolerance policy against sexual and workplace harassment.",
    icon: "/icons/Anti-Harassment-Policy.svg",
  },
  {
    title: "Team Spirit",
    description: "We stand for a supportive work ambience that uplifts and promotes passion, ideas, and creativity.",
    icon: "/icons/Team-Spirit.svg",
  },
  {
    title: "Ownership",
    description: "We take collective responsibility for our actions and handle failures with the same spirit as we celebrate success.",
    icon: "/icons/Ownership.svg",
  },
];

const CultureGrid = () => {
  return <CardGrid title="Work Culture" items={workCulture}/>
};

export default CultureGrid