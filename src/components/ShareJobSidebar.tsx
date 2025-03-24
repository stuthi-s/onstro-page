import React from "react";
import { FacebookFilled, TwitterOutlined, LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";
import { ShareJobProps } from "@/types/career";

const ShareJob = ({ jobTitle, jobUrl }: ShareJobProps) => {
  const encodedTitle = encodeURIComponent(jobTitle);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${jobUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${jobUrl}&title=${encodedTitle}`,
  };

  return (
    <div className="items-center justify-center text-center mt-8 border-t pt-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        SHARE JOB OPENINGS
      </h2>
      <Link href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 border-2 border-gray-300 rounded-full p-2">
        <FacebookFilled size={20} />
      </Link>
      <Link href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 border-2 border-gray-300 rounded-full p-2">
        <TwitterOutlined size={20} />
      </Link>
      <Link href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 border-2 border-gray-300 rounded-full p-2">
        <LinkedinFilled size={20} />
      </Link>
    </div>
  );
};

export default ShareJob
