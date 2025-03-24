import CompanyOffers from "@/components/CompanyOffers";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import EnterpriseAgility from "@/components/EnterpriseAgility";
import GreatIdeasSection from "@/components/GreatIdeasSection";
import LogoSlider from "@/components/LogoSlider";
import WhyUs from "@/components/WhyUs";
import Link from "next/link";


const IconSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-wrap justify-center gap-12">
        <Counter value={3} label="Global Offices" icon="/icons/Years-inBusiness.svg" />
        <Counter value={10} label="Years in Business" icon="/icons/Total-Industries-Covered.svg" />
        <Counter value={40} label="Sectors Served" icon="/icons/Countries-served.svg" />
        <Counter value={100} label="Countries Covered" icon="/icons/SaaS-Customers.svg" />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <div
        className="relative w-[90%] max-w-[1250px] mx-auto h-[450px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center rounded-[40px] overflow-hidden -mt-[50px]"
        style={{ backgroundImage: "url('/images/homePage.svg')" }}>
        <div className="absolute inset-0 bg-emerald-200 opacity-20 rounded-3xl"></div>
        <h1 className="text-blue-950 text-5xl font-bold z-10 mt-10">Driving Impact with</h1>
        <h1 className="text-blue-950 text-5xl font-bold z-10 mt-5">Enterprise Agility!</h1>
        <p className="text-blue-950 text-lg mt-4 max-w-3xl z-10 mt-4">
        Delivering business technology solutions is our forte. We simplify business operations across industries with transformative consulting, software development and SaaS products.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-blue-950 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-200 m-4">
          Get in touch →
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-24 mb-8">
      <h2 className="text-lg text-gray-600 mb-6">Trusted by companies in over 100+ countries</h2>
      <LogoSlider />
    </div>

      <div className="mt-2">
        <CompanyOffers />
      </div>

      <h2 className="text-3xl font-semibold text-blue-950 text-center mb-6">
        Beyond the Numbers
      </h2>
      <p className="text-center text-md text-blue-950 max-w-5xl mx-auto">
        Digits alone do not justify the worth our team provide to our customers. We value connections more than records.
      </p>

      <div className="mt-4">
        <IconSection />
      </div>

      <div className="mt-4">
        <EnterpriseAgility />
      </div>

      <div className="mt-4">
        <WhyUs />
      </div>
      
      <div className="mt-4">
        <GreatIdeasSection/>
      </div>
      
      <div className="mt-4">
        <ContactForm/>
      </div>
    </>
  )
}