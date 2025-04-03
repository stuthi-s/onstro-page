"use client";
import DOMPurify from "dompurify";
import { Job } from "@/types/career";

interface JobDescriptionProps {
  job: Job;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ job }) => {
  const sanitizedDescription = DOMPurify.sanitize(job?.description || "");

  return (
    <div className="max-w-none text-gray-800 leading-relaxed text-lg mt-6">
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }} 
      />
    </div>
  );
};

export default JobDescription;