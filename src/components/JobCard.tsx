"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { FaMapMarkerAlt, FaBuilding, FaBriefcase } from "react-icons/fa"
import { Job } from "@/types/career";

interface JobProps {
  job: Job
}
const JobCard = ({ job }: JobProps) => {
  const router = useRouter()

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h2 className="font-bold text-lg">
          {job.title}</h2>
        <p className="text-gray-600">
          <FaBuilding className="mr-2" />
          {job.department}
          <FaMapMarkerAlt className="mr-2" />
          {job.location}
          <FaBriefcase className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 rounded mr-2" />
          {job.type}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => router.push(`/jobs/${job.id}`)}>
          View
        </button>
        <a
          href={job.applyUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-3 py-1 rounded">
          Apply
        </a>
      </div>
    </div>
  )
}

export default JobCard