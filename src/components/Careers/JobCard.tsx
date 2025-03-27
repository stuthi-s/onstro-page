"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { FaMapMarkerAlt, FaBuilding} from "react-icons/fa"
import { Job } from "@/types/career";

interface JobProps { 
  job: Job
}

const JobCard = ({ job }: JobProps) => {
  const router = useRouter()

  return (
    <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white hover:bg-blue-50">
      <div>
        <h2 className="font-bold text-xl text-gray-700">{job.title}</h2>
        <div className="flex gap-4 pr-10 text-gray-600 mt-3">
          <span className="flex items-center gap-2">
            <FaBuilding className="text-gray-500"/>
            {job.department.title}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" />
            {job.location.city}, {job.location.state}, {job.location.country}
          </span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
            {job.type}
          </span>
        </div>
      </div>

      <div className="flex gap-4 ml-auto">
        <a
          href={job.applyUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-950 transition">
          APPLY
        </a>
        <button
          className="bg-white text-blue-950 border border-blue-950 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
          onClick={() => router.push(`/careers/${job.id}`)}>
          VIEW
        </button>
      </div>
    </div>
  )
}

export default JobCard