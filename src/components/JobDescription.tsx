"use client";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { Job } from "@/types/career";

const JobDescription = ({ job }: { job: Job }) => {
  const sanitizedDescription = DOMPurify.sanitize(job?.description || "");

  return (
<div className="max-w-none text-gray-800 leading-relaxed text-lg">
  {parse(sanitizedDescription)}

  {(job?.responsibilities || job?.requirements) && (
    <div className="mt-10 border-t pt-6">
      {job?.responsibilities && (
        <div className="mt-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
            {job.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
      )}

      {job?.requirements && (
        <div className="mt-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )}
</div>
  )
}

export default JobDescription