import CultureGrid from "@/components/Careers/CultureGrid";
import Gallery from "@/components/Careers/Gallery";
import EmployeePerksGrid from "@/components/AboutUs/EmployeePerksGrid";
import JobTable from "@/components/Careers/JobTable";
import { fetchJobsData } from "@/lib/fetchJobsData";

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
  "/images/onstro-girls.jpg",
]   

export default async function Careers({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const params = {
    search: typeof searchParams?.search === "string" ? searchParams.search : "",
    department: typeof searchParams?.department === "string" ? parseInt(searchParams.department, 10) : undefined,
    location: typeof searchParams?.location === "string" ? parseInt(searchParams.location, 10) : undefined,
    function: typeof searchParams?.function === "string" ? parseInt(searchParams.function, 10) : undefined,
    page: typeof searchParams?.page === "string" ? parseInt(searchParams.page, 10) : 1,
    view: typeof searchParams?.view === "string" ? searchParams.view : "list",
  };

  const { jobs, departments, locations, functions } = await fetchJobsData(
    params.search,
    params.department,
    params.location,
    params.function,
    params.page
  );

  return (
    <>
      <div
        className="relative w-[90%] max-w-[1250px] mx-auto h-[400px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center rounded-[40px] overflow-hidden -mt-[60px]"
        style={{ backgroundImage: "url('/images/aboutUs.svg')" }}>
        <div className="absolute inset-0 bg-blue-200 opacity-30 rounded-3xl"></div>
        <h1 className="text-blue-950 text-5xl font-semibold z-10">Careers</h1>
        <p className="text-blue-950 text-xl mt-4 max-w-3xl z-10">
          We seek passionate and creative individuals to be a part of our purpose-driven and ever-growing team.
        </p>
      </div>

      <div className="mt-8">
        <Gallery images={images} />
      </div>

      <div className="mt-8">
        <CultureGrid />
      </div>

      <div className="container mx-auto p-6">
        <JobTable 
          jobs={jobs} 
          departments={departments} 
          locations={locations} 
          functions={functions}
          searchParams={{
            view: params.view,
            department: params.department,
            location: params.location,
            function: params.function,
            search: params.search
          }}
        />
      </div>

      <div className="mt-8 mb-6">
        <EmployeePerksGrid />
      </div>
    </>
  );
}
