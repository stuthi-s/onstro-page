import { FaMapMarkerAlt, FaBuilding, FaBriefcase } from "react-icons/fa";

type Job = {
  id: string;
  title: string;
  function: string;
  department: string;
  location: string;
  type: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center mb-4">
      <div>
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-500 flex items-center">
          <FaBuilding className="mr-2"/> 
          {job.department}
        </p>
        <p className="text-sm text-gray-500 flex items-center">
          <FaMapMarkerAlt className="mr-2"/> 
          {job.location}
        </p>
        <span className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded-lg flex items-center">
          <FaBriefcase className="mr-2"/> 
          {job.type}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-950 text-white px-4 py-2 rounded-lg">APPLY</button>
        <button className="text-blue-950 underline">VIEW</button>
      </div>
    </div>
  );
}
