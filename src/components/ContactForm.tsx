import React from "react"

const ContactForm = () => {
  return (
    <div className="container rounded-3xl mx-auto px-12 py-16 mb-20 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white sm:px-6 lg:px-8">
      <h2 className="text-4xl font-semibold text-center text-gray-900">
        Start Optimizing Your Business with Onstro
      </h2>
      <p className="text-center text-gray-600 mt-4 text-xl">
        Need help to transform your business with Enterprise Agility? Get in touch for a free 30-minute consultation!
      </p>
      <div className="mt-8 w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h3 className="text-lg font-semibold text-center text-gray-900">Get In Touch</h3>
        <form className="mt-6 space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:outline-none"/>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:outline-none"/>
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-950 focus:outline-none"/>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-950 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
