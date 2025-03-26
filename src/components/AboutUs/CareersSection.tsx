"use client";
import Image from "next/image";
import Link from "next/link";

const CareersSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-sky-50 p-10 rounded-lg max-w-5xl mx-auto">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/Onstro-about-us-image.png"  
          alt="Join Onstro"
          width={600}  
          height={600} 
          className="rounded-lg"/>
      </div>

      <div className="w-full md:w-1/2 text-left space-y-8 p-6">
        <p className="text-blue-950 text-2xl px-1 py-1">
          Dream of creating an impact in the real world? We hire creative and passionate individuals who share our values. At Onstro, we brainstorm ideas, write clean code, enjoy amazing coffee and spar at table tennis in our spare time.
        </p>
        <div className="flex justify-center">
        <Link href="/careers" className="bg-blue-950 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-950 transition"> Visit Careers </Link>
        </div>
      </div>
    </section>
  )
}

export default CareersSection