import Image from 'next/image';
import Link from 'next/link';

const GreatIdeasSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start bg-white py-16 px-8 md:px-20">
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/We-Bring-Great-Ideas-To-Life.png" 
          alt="Team Collaboration"
          width={650}
          height={400}
          className="rounded-lg shadow-md"/>
      </div>
      
      <div className="md:w-1/2 mt-6 md:pl-12 md:text-center ">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          We Bring Great Ideas to Life
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Challenges create opportunities. Our story stems from the principle of overcoming real-life business problems.
          We identify problems, consult organizations, and solve pain points to simplify human efforts by innovating technology.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Embarked in 2013, we are a team globally recognized for specializing in SaaS products, enterprise solutions, and transformative consulting.
        </p>
        <Link
          href="/about"
          className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-9 transition">
          Learn more →
        </Link>
      </div>
    </section>
  )
}

export default GreatIdeasSection