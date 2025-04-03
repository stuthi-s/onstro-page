"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Job } from "@/types/career";
import Link from "next/link";
import JobDescription from "@/components/Careers/JobDescription";
import JobListingSidebar from "@/components/Careers/JobListingSidebar"

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const jobId = id ? parseInt(id as string, 10) : 0;

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://teknorix.jobsoid.com/api/v1/jobs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch job details");

        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error)
      } finally {
        setLoading(false)
      }
    };

    if (id) fetchJobDetails()
  }, [id]);

  if (loading) return <p className="text-center text-gray-600 text-lg">Loading job details...</p>;
  if (!job) return <p className="text-center text-red-600 text-lg">Job not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{job?.title}</h1>

      <div className="flex flex-wrap items-center gap-x-4 text-xl text-gray-700 font-medium">
        <span className="text-gray-600">{job?.department?.title}</span>
        <span className="font-semibold">{job?.location?.city}, {job?.location?.state}, {job?.location?.country}</span>
        <span className="font-semibold">{job?.type}</span>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <JobDescription job={job} />
        </div>
        <div>
          <JobListingSidebar currentJobId={jobId} />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-6 mt-10">
        <a
          href={job?.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-950 text-lg text-semibold border border-blue-950 px-3 py-1 rounded-lg hover:border-blue-800">
          APPLY
        </a>

        <Link href="/careers" className="text-blue-950 text-lg hover:underline"> Back to Careers {<span className="onstro-right align-middle text-sm md:text-xs lg:text-sm"></span>} </Link>
      </div>
    </div>
  )
}

export default JobDetails