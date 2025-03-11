"use client";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Job } from "@/types/career";

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://teknorix.jobsoid.com/api/v1/jobs");
        if (!response.ok) throw new Error("Failed to fetch jobs");

        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data)) {
          setJobs(data);
        } else if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  if (loading) {
    return <p className="text-center text-gray-600">Loading jobs...</p>;
  }
  console.log("Jobs: ", jobs)
  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-2xl font-bold mb-5">Job Openings</h1>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs available</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  )
}

export default JobList