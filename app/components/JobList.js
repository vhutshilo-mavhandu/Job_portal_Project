import JobCard from "./JobCard";
import React from 'react';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/portal/posts", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data;
};

async function JobList() {
  const posts = await getData();

  return (
    <div>
      {posts.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;
