"use client";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import FilterBar from "./FilterBar";

type Job = {
  id: string;
  title: string;
  function: string;
  department: string;
  location: string;
  type: string;
};

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("https://teknorix.jobsoid.com/api/v1/jobs", {
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Raw API Response:", data);

        if (Array.isArray(data)) {
          setJobs(data);
          setFilteredJobs(data);
        } else if (data.jobs) { 
          setJobs(data.jobs);
          setFilteredJobs(data.jobs);
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleFilter = (filters: Partial<Job>) => {
    let filtered = jobs;
    if (filters.function) filtered = filtered.filter((job) => job.function === filters.function);
    if (filters.department) filtered = filtered.filter((job) => job.department === filters.department);
    if (filters.location) filtered = filtered.filter((job) => job.location.includes(filters.location || ""));
    setFilteredJobs(filtered);
  };

  console.log("Filtered Jobs:", filteredJobs); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Careers</h1>
      <FilterBar onFilter={handleFilter} />
      <div className="mt-4">
        {Array.isArray(filteredJobs) && filteredJobs.length > 0 ? (
          filteredJobs.map((job) => 
            typeof job === "object" && job !== null ? (
              <JobCard key={job.id} job={job} />
            ) : (
              <p key={job}>Invalid job data</p>
            )
          )
        ) : (
          <p className="text-center text-gray-600">No jobs found.</p>
        )}
      </div>
    </div>
  )  
}
