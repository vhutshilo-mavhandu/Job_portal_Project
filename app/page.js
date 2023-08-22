import React from 'react';
import JobList from './components/JobList'



const Home = async({jobs}) => {
  
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

export default Home;






