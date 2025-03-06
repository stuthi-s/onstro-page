import Image from "next/image";

export default function WorkVibes({ images }: { images: string[] }) {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-6">Work Vibes</h2>
      <div
        className="grid grid-cols-3 grid-rows-4 gap-4 auto-rows-fr
                   md:grid-cols-[repeat(4,1fr)] md:grid-rows-[repeat(3,auto)]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl shadow-lg ${
              index === 0 ? "col-span-2 row-span-2" : "" 
            } ${index === 4 || index === 7 ? "row-span-2" : ""}`} >
            <Image
              src={src}
              alt={`Work vibe ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
          </div>
        ))}
      </div>
    </div>
  )
}
