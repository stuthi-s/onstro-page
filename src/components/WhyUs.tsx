import React from "react";

const WhyUs = () => {
    return (
        <section className="text-center py-12 px-4 bg-white">
            <div className="flex justify-center">
                <button className="px-4 py-1 text-sm font-medium text-blue-950 rounded-full shadow-md mb-2">
                    Why Us?
                </button>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">We Solve, You Succeed</h2>
            <p className="text-xl text-gray-600 mt-6 max-w-5xl mx-auto">
                Providing ground-breaking solutions to enterprise customers is our forte. We take pride as a team in serving global clients. Our work quality is defined by creative and dynamic expertise across all verticals.
            </p>

            <div className="relative mt-10 max-w-4xl mx-auto">
                <div className="h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-between px-6">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="relative">
                            <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-800 text-lg font-medium shadow-md">
                                {num}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-5 text-gray-800 font-medium text-sm mt-4 max-w-5xl mx-auto">
                <div className="text-center">Dynamic Team</div>
                <div className="text-center">Latest Technologies</div>
                <div className="text-center">Agile Development</div>
                <div className="text-center">Data Security</div>
                <div className="text-center">Dedicated Support</div>
            </div>
        </section>
    )
}

export default WhyUs