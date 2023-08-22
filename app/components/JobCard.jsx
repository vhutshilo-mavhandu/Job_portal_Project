import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
        <p className="text-blue-500">{job.type}</p>
      </div>
      <p className="mt-2">{job.location}</p>
      <p className="font-bold mt-2">Job Description</p>
      <p className="mt-2">{job.description}</p>
      <p className="font-bold mt-2">Duties and Responsibilities</p>
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Apply on company site
        </button>
      </div>
    </div>
  );
};

export default JobCard;
