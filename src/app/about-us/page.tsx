import ManagementTeam from "@/components/AboutUs/ManagementTeam";
import ValuesGrid from "@/components/AboutUs/ValuesGrid";
import Counter from "@/components/Counter";
import CareersSection from "@/components/AboutUs/CareersSection";
import ContactSection from "@/components/AboutUs/ContactSection";

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        <Counter value={3} label="Offices Around the World" icon="/icons/office.svg" />
        <Counter value={10} label="Progressive Years in Business" icon="/icons/years-in-business.svg" />
        <Counter value={75} label="Global Team Strength" icon="/icons/Team-Strength.svg" />
        <Counter value={30} label="Enterprise Products Developed" icon="/icons/Enterprise-prod.svg" />
      </div>
    </section>
  )
}

export default function AboutUs() {
  return (<>
    <div className="relative w-[90%] max-w-[1250px] mx-auto h-[400px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center rounded-[40px] overflow-hidden -mt-[60px]"
      style={{ backgroundImage: "url('/images/aboutUs.svg')" }}>
      <div className="absolute inset-0 bg-blue-200 opacity-30 rounded-3xl"></div>
      <h1 className="text-blue-950 text-5xl font-semibold z-10">About Us</h1>
      <p className="text-blue-950 text-xl mt-4 max-w-3xl z-10">
        A solution-based company with a group of global brands based in Europe, India, and the USA, serving business customers in 100+ countries. Our diverse team offers innovative digital enterprise products, custom development, and IT consulting services.
      </p>
    </div>

    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center mb-6 text-[#0D1C42]">
        Our Mission
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-5xl mx-auto">
        “We are technology innovators focused on changing the way businesses operate to make human life better.”
      </p>

      <div className="mt-4">
        <StatsSection />
      </div>

      <div className="mt-2">
        <ValuesGrid />
      </div>

      <div className="mt-8">
        <ManagementTeam />
      </div>

      <h2 className="text-4xl mt-16 font-bold text-blue-950 text-center">
        Join Onstro
      </h2>

      <div className="mt-8">
        <CareersSection />
      </div>

      <div className="mt-8">
        <ContactSection />
      </div>

    </div>
  </>
  )
}