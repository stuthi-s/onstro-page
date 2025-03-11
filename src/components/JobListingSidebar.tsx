"use client";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

interface Job {
  id: number;
  title: string;
  applyUrl: string;
  department: { title: string };
  location: { city: string; country: string };
}

const OtherJobOpenings = ({ currentJobId }: { currentJobId: number }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://teknorix.jobsoid.com/api/v1/jobs");
        const data = await response.json();

        const filteredJobs = data.filter((job: Job) => job.id !== currentJobId).slice(0, 4);
        setJobs(filteredJobs);
        console.log("API Response:", data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [currentJobId]);

  return (
    <div className="border border-gray-300 rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
        OTHER JOB OPENINGS
      </h2>
      
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="mb-4">
              <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="block text-gray-600 font-semibold text-lg hover:text-gray-800">
                {job.title}
              </a>
              <p className="text-gray-600 text-md flex items-center gap-2">
                <FaBuilding className="text-gray-500" /> {job.department.title}
              </p>
              <p className="text-gray-600 text-md flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" /> {job.location.city}, {job.location.country}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OtherJobOpenings
