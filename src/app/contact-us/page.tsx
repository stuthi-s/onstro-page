"use client"
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 bg-blue-50 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 text-center lg:text-left">
            Contact Us
          </h2>
          <p className="text-blue-950 text-lg text-center lg:text-left">
            Get in touch to start your Enterprise Agility journey. We are here to help!
          </p>
          {[
            {
              country: "Lisbon, Portugal",
              address: "Rua Campos Júnior, nº 1 A 1070-306 Lisboa",
              icon: "/icons/portugal_flag.png",
            },
            {
              country: "Goa, India",
              address: "S-146, Verna Industrial Estate, Verna, Goa - 403722",
              icon: "/icons/india_flag.png",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Image src={item.icon} alt={item.country} width={35} height={35} className="mb-4" />
              <div>
                <p className="text-gray-700 text-lg font-semibold">{item.country}</p>
                <p className="text-gray-700 text-lg">{item.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10">
        <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactUsPage