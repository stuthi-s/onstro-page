import WorkCulture from "@/components/WorkCulture";
import WorkVibes from "@/components/WorkVibes";
import PerksOffered from "@/components/PerksOffered";
import JobTable from "@/components/JobTable";

const images = [
  "/images/board-meeting-discussion-scaled.jpg",
  "/images/chess-playing-scaled.jpg",
  "/images/tt-playing-scaled.jpeg",
  "/images/discussions-scaled.jpg",
  "/images/Internet-of-Things-IoT-image.jpg",
  "/images/chit-chat-scaled.jpg",
  "/images/team-meeting-in-the-hurdle-room-scaled.jpg",
  "/images/explain-one-on-one-scaled.jpg",
  "/images/Web-Application-Development-image.jpg",
  "/images/Mobile-Application-Development-image.jpg",
];

export default function Careers() {
  return (
    <>
      <div
        className="relative w-[90%] max-w-[1250px] mx-auto h-[400px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center rounded-[40px] overflow-hidden -mt-[60px]"
        style={{ backgroundImage: "url('/images/aboutUs.svg')" }}
      >
        <div className="absolute inset-0 bg-blue-200 opacity-30 rounded-3xl"></div>
        <h1 className="text-blue-950 text-5xl font-semibold z-10">Careers</h1>
        <p className="text-blue-950 text-xl mt-4 max-w-3xl z-10">
          We seek passionate and creative individuals to be a part of our
          purpose-driven and ever-growing team.
        </p>
      </div>

      <div className="mt-8">
        <WorkVibes images={images} />
      </div>

      <div className="mt-8">
        <WorkCulture />
      </div>
      
      <div className="container mx-auto p-6">
      <JobTable />
    </div>

      <div className="mt-8 mb-6">
        <PerksOffered />
      </div>
    </>
  )
}