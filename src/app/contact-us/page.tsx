import Image from "next/image";

const BusinessSection = () => {
    return (
      <section className="container bg-blue-50 rounded-3xl mx-auto px-14 py-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-14">
          <h2 className="text-6xl font-bold text-blue-950 text-center">
         Contact Us
        </h2>
        <p className="text-blue-950 text-lg mt-4 max-w-3xl">Get in touch to start your Enterprise Agility journey. We are here to help!</p>
            {[
              {
                country: "Lisbon, Portugal",
                address: "Rua Campos Júnior, nº 1 A 1070-306 Lisboa",
                icon: "/icons/portugal_flag.png"
              },
              {
                country: "Goa, India",
                address: "S-146, Verna Industrial Estate, Verna, Goa - 403722",
                icon: "/icons/india_flag.png"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>
                  <Image src={item.icon} alt={item.country} width={35} height={35} className="mb-4"/>
                  <p className="text-gray-700 text-lg font-semibold mb-2">{item.country}</p>
                  <p className="text-gray-700 text-lg font-md ">{item.address}</p>
              </div>
              </div>
            ))}
          </div>
  
          <div className="bg-gray-50 shadow-2xl rounded-2xl md:p-10">
            <form className="space-y-10">
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
    );
  };
  
  export default BusinessSection;