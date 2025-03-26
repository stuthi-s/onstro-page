import Image from 'next/image';

type CompanyOffers = {
  title: string;
  description: string;
  icon: string;
  points: string[];
}

const coreValues: CompanyOffers[] = [
  {
    title: "IT Consulting",
    description: "Implement right strategies and leverage the latest technologies to stay competitive in the digital era.",
    icon: "/icons/IT-Consulting.svg",
    points: [
      "Business Process Automation",
      "Data and Analytics",
      "Managed Cloud Services",
    ],
  },
  {
    title: "Custom Software Development",
    description: "Build bespoke web and mobile applications specific to your business needs.",
    icon: "/icons/Custom-Software-Development.svg",
    points: [
      "Enterprise Web Apps",
      "Mobile Apps",
      "AI & ML",
      "Internet of Things (IoT)",
    ],
  },
  {
    title: "Low Code Development",
    description: "Launch business apps quickly and efficiently by minimizing disruption and maximizing results.",
    icon: "/icons/Low-Code-Development.svg",
    points: [
      "Microsoft Power Platform",
      "Onstro Flow",
    ],
  },
  {
    title: "SaaS Products",
    description: "Explore our cloud-based products to take care of all your business activities.",
    icon: "/icons/SaaS-products.svg",
    points: [
      "Workplace",
      "Jobsold",
      "BYOS",
    ],
  }
]

const OffersBlock = () => {
  return (
    <section className="py-16 p-1">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl md:text-4xl font-semibold text-center text-gray-900 mb-10"> What We Offer </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="p-10 bg-blue-50 shadow-lg rounded-xl flex flex-col items-left text-left transition-transform duration-300 hover:scale-105">
              <Image src={value.icon} alt={value.title} width={25} height={25} className="mb-4"/>
              <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {value.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OffersBlock