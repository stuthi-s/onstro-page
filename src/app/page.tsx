import CompanyOffers from "@/components/CompanyOffers";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import EnterpriseAgility from "@/components/EnterpriseAgility";
import GreatIdeasSection from "@/components/GreatIdeasSection";
// import LogoScroller from "@/components/LogoScroller";
import WhyUs from "@/components/WhyUs";
import Link from "next/link";

const IconSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-wrap justify-center gap-12">
        <Counter value={10} label="Years in Business" icon="/icons/Years-inBusiness.svg" />
        <Counter value={40} label="Total Industries Covered" icon="/icons/Total-Industries-Covered.svg" />
        <Counter value={100} label="Countries Served" icon="/icons/Countries-served.svg" />
        <Counter value={7000} label="SaaS Customers" icon="/icons/SaaS-Customers.svg" />
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
        <h1 className="text-blue-950 text-5xl font-bold z-10 m-4">Delivering Solutions.</h1>
        <h1 className="text-blue-950 text-5xl font-bold z-10">Driving Impact.</h1>
        <p className="text-blue-950 text-lg mt-4 max-w-3xl z-10">
          A trusted brand where business technology services sync with powerful solutions—built to serve any industry!
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-emerald-900 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-950 transition m-2">
          Get in touch →
        </Link>
      </div>

      {/* <div className="mt-2">
        <LogoScroller/>
      </div> */}

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