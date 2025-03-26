import CardGrid from "../CardGrid";

const perkOffered = [
  {
    title: "Competitive Salary",
    description: "Get the pay you deserve for your valuable service.",
    icon: "/icons/Competitive-Salary.svg",
  },
  {
    title: "Bonuses and Rewards",
    description: "Earn bonuses and referral commissions with employee rewards program.",
    icon: "/icons/Bonuses-and-Rewards.svg",
  },
  {
    title: "Talent Nurturing",
    description: "Get access to premium Pluralsight courses and avail Reimbursement.",
    icon: "/icons/Talent-Nurturing.svg",
  },
  {
    title: "Fast-track Growth",
    description: "Reach goals faster with an equal and fair system of performance tracking.",
    icon: "/icons/Fast-track-Growth.svg",
  },
  {
    title: "Healthy Snacks",
    description: "Munch on daily healthy-catered evening snacks to take care of your health.",
    icon: "/icons/Snacks.svg",
  },
  {
    title: "Flexible Work Hours",
    description: "Leverage flexible work policy and spend leisure time playing indoor games.",
    icon: "/icons/Flexible-Work-Hours.svg",
  },
]

const EmployeePerksGrid = () => {
  return <CardGrid title="Perks Offered" items={perkOffered} />;
}

export default EmployeePerksGrid