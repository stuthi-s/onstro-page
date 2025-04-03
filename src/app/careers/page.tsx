import CultureGrid from "@/components/Careers/CultureGrid";
import Gallery from "@/components/Careers/Gallery";
import EmployeePerksGrid from "@/components/AboutUs/EmployeePerksGrid";
import JobTable from "@/components/Careers/JobTable";
import { Job } from "@/types/career";

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

async function fetchJobsData(searchTerm = "", departmentId?: number, locationId?: number, functionId?: number, page = 1, pageSize = 10) {
  try {
    const [jobsRes, departmentsRes, locationsRes, functionsRes] = await Promise.all([
      fetch("https://teknorix.jobsoid.com/api/v1/jobs", { next: { revalidate: 3600 } }),
      fetch("https://teknorix.jobsoid.com/api/v1/departments", { next: { revalidate: 3600 } }),
      fetch("https://teknorix.jobsoid.com/api/v1/locations", { next: { revalidate: 3600 } }),
      fetch("https://teknorix.jobsoid.com/api/v1/functions", { next: { revalidate: 3600 } }),
    ]);

    if (!jobsRes.ok || !departmentsRes.ok || !locationsRes.ok || !functionsRes.ok) {
      throw new Error("One or more requests failed");
    }

    const [jobs, departments, locations, functions] = await Promise.all([
      jobsRes.json(),
      departmentsRes.json(),
      locationsRes.json(),
      functionsRes.json(),
    ]);

    let filteredJobs = jobs as Job[];

    if (searchTerm) {
      filteredJobs = filteredJobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (departmentId) filteredJobs = filteredJobs.filter((job) => job.department.id === departmentId);
    if (locationId) filteredJobs = filteredJobs.filter((job) => job.location.id === locationId);
    if (functionId) filteredJobs = filteredJobs.filter((job) => job.function.id === functionId);

    const totalJobs = filteredJobs.length;
    filteredJobs = filteredJobs.slice((page - 1) * pageSize, page * pageSize);

    return { jobs: filteredJobs, departments, locations, functions, totalJobs };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { jobs: [], departments: [], locations: [], functions: [], totalJobs: 0 };
  }
}

export default async function Careers({
  searchParams,
}: {
  searchParams: { 
    search?: string; 
    department?: string; 
    location?: string; 
    function?: string; 
    page?: string;
    view?: string;
  };
}) {
  const searchTerm = searchParams?.search || "";
  const departmentId = searchParams?.department ? Number(searchParams.department) : undefined;
  const locationId = searchParams?.location ? Number(searchParams.location) : undefined;
  const functionId = searchParams?.function ? Number(searchParams.function) : undefined;
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const view = searchParams?.view || "list";

  const { jobs, departments, locations, functions } = await fetchJobsData(
    searchTerm, 
    departmentId, 
    locationId, 
    functionId, 
    page
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
            view,
            department: departmentId,
            location: locationId,
            function: functionId,
            search: searchTerm
          }}
        />
      </div>

      <div className="mt-8 mb-6">
        <EmployeePerksGrid />
      </div>
    </>
  );
}
