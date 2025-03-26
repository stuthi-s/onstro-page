import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
}

const founders: TeamMember[] = [
  { name: "Bhavit Naik", role: "Co-Founder & CEO", img: "Bhavit.jpg", linkedin: "https://www.linkedin.com/in/bhavit/"},
  { name: "Yashvit Naik", role: "Co-Founder & CTO", img: "Yashvit.png",linkedin: "https://www.linkedin.com/in/yashvit/"},
]

const teamMembers: TeamMember[] = [
  { name: "Pratiksha Mudaliar", role: "Head - Finance", img: "Pratiksha.jpg" },
  { name: "Shesham Bidaye", role: "Head - Operations", img: "Shesham.jpg" },
  { name: "Prajkta Biliye", role: "Head - Product Design", img: "Prajkta.jpg" },
  { name: "Aditya Gaonkar", role: "Head - Project Delivery", img: "Aditya.jpg" },
  { name: "Macleane Pereira", role: "Head - Technology", img: "Macleane.jpg" },
]

const ManagementTeam = () => {
  return (
    <div className="text-center p-2">
      <h2 className="text-5xl font-semibold text-blue-950">Our Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center mt-16">
        {founders.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={`/images/${member.img}`} width={250} height={250} className="rounded-full" alt={member.name} />
            <h3 className="text-2xl font-bold mt-2">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.role}</p>
            <Link
              href={member.linkedin?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-950 text-sm mt-2 hover:underline">
              View Profile
            </Link>
          </div>
        ))}
      </div>

      <div className="team grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 justify-center mt-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={`/images/${member.img}`} width={175} height={175} className="rounded-full" alt={member.name} />
            <h3 className="text-lg font-bold mt-2">{member.name}</h3>
            <p className="text-md text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManagementTeam