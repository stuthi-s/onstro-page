import Link from "next/link";

const BusinessSection = () => {
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
                    className="text-blue-950 text-xl font-semibold hover:underline">
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
  
          <div className="bg-gray-50 shadow-2xl rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-blue-950 text-center mb-6">
              Ready to connect?
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-950"/>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-950"/>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-950">
                </textarea>
              <button
                type="submit"
                className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-950">Submit
                </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default BusinessSection