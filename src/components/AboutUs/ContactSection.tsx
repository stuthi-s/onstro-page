import Link from "next/link";
import ContactForm from "@/components/Common/ContactForm"

const ContactSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
        Let’s Talk Business!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {[
            {
              description: "I am looking for an IT partner for advice and support on cloud automation, UI/UX design, and business strategy",
              label: "IT Consulting Services",
            },
            {
              description: "I need quick application-building services to cater to my customers and operational demands",
              label: "Low Code Development Services",
            },
            {
              description: "I want bespoke software to meet my unique or complex business needs",
              label: "Custom Software Development Services",
            },
            {
              description: "I need an all-in-one business solution to take care of my entire business",
              label: "Onstro – Enterprise Agility Platform",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <span className="text-blue-950 text-xl">⎷</span>
              <div>
                <p className="text-gray-700 text-xl">{item.description}</p>
                <Link
                  href="#"
                  className="text-blue-950 text-xl font-semibold hover:underline"
                >
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 shadow-2xl rounded-2xl p-4 md:p-5 w-full max-w-md mx-auto">
          <h3 className="text-3xl font-bold text-blue-950 text-center mb-4">
            Ready to connect?
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection