import Image from 'next/image';

export default function AgilityBlock() {
  return (
    <section className="flex flex-col items-center text-center py-2 px-2">
        <button className="px-4 py-1 text-sm font-medium text-blue-950 rounded-full shadow-md mb-4">
          Build Your Own SaaS
        </button>
      <h2 className="text-3xl font-bold text-blue-950">Switch to Enterprise Agility!</h2>
      <p className="text-gray-700 mt-3 max-w-2xl">
        Say goodbye to your business challenges. Adopt a customizable cloud-based enterprise agility workspace
        to run your business operations and optimize workflows.
      </p>
      <button className="mt-5 bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-950">
        Explore Onstro {<span className="onstro-right align-middle text-sm md:text-xs lg:text-sm"></span>}
      </button>

      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-8">
          <Image src="/images/Byos-illustration.svg" alt="Build your own SaaS" width={1300} height={1300} />
      </div>
    
    </section>
  )
}