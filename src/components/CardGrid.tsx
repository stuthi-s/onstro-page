import Image from "next/image";

type CardData = {
  title: string;
  description: string;
  icon: string;
}

type CardGridProps = {
  title: string;
  items: CardData[];
}

const CardGrid = ({ title, items }: CardGridProps) => {
  return (
    <section className="py-2 p-1">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-4xl font-semibold text-center text-gray-900 mb-4">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((value, index) => (
            <div
              key={index}
              className="p-12 bg-white shadow-lg rounded-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <Image src={value.icon} alt={value.title} width={80} height={80} className="mb-4"/>
              <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardGrid