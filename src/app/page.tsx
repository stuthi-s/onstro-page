import OffersBlock from "@/components/Home/OffersBlock";
import Counter from "@/components/Common/Counter";
import AgilityBlock from "@/components/Home/AgilityBlock";
import VisionSection from "@/components/Home/VisionSection";
import LogoSlider from "@/components/Common/LogoSlider";
import StatisticsStepper from "@/components/Home/StatisticsStepper";
import Link from "next/link";
import ContactForm from "@/components/Common/ContactForm";

const IconSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto flex flex-wrap justify-center">
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
          Delivering business technology solutions is our forte. We simplify business operations across industries with transformative consulting, software development, and SaaS products.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-blue-950 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-850 m-4 z-20">
          Get in touch →
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-24 mb-8">
        <h2 className="text-lg text-gray-600 mb-6">TRUSTED BY THE BEST</h2>
        <LogoSlider />
      </div>

      <div className="mt-2">
        <OffersBlock />
      </div>

      <h2 className="text-3xl font-semibold text-blue-950 text-center mb-6">Beyond the Numbers</h2>
      <p className="text-center text-md text-blue-950 mt-10">
        Digits alone do not justify the worth our team provide to our customers. We value connections more than records.
      </p>

      <div className="mt-10">
        <IconSection />
      </div>

      <div className="mt-10">
        <AgilityBlock />
      </div>

      <div className="mt-16">
        <StatisticsStepper />
      </div>

      <div className="mt-4">
        <VisionSection />
      </div>

      <div className="container rounded-3xl mx-auto px-12 py-16 mb-20 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center text-gray-900">
          Start Optimizing Your Business with Onstro
        </h2>
        <p className="text-center text-gray-600 mt-4 text-xl">
          Need help to transform your business with Enterprise Agility? Get in touch for a free 30-minute consultation!
        </p>
        <div className="mt-8 w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
          <h3 className="text-lg font-semibold text-center text-gray-900">Get In Touch</h3>
          <div className="mt-6 w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}