import CardGrid from "../Common/CardGrid";

const coreValues = [
  {
    title: "Quality First",
    description: "We don't compromise on quality.",
    icon: "/icons/Quality.svg",
  },
  {
    title: "Customer Delight",
    description: "We believe in exceeding expectations.",
    icon: "/icons/Customer-delight.svg",
  },
  {
    title: "Best Practices",
    description: "We follow the best standards to do our work.",
    icon: "/icons/Best-practices.svg",
  },
  {
    title: "Value Centric",
    description: "Our strong tech beliefs define who we are.",
    icon: "/icons/Value-centric.svg",
  },
  {
    title: "Trust Driven",
    description: "Being authentic and transparent connects us.",
    icon: "/icons/Trust.svg",
  },
  {
    title: "Time Bound",
    description: "The right time to complete our duties is now.",
    icon: "/icons/Time.svg",
  },
]

const ValuesGrid = () => {
  return <CardGrid title="Our Core" items={coreValues} />
}

export default ValuesGrid