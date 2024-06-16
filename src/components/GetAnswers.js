import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GetAnswers = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-1">Get Answers</h2>
          <p className="text-sm text-gray-600">to all your queries</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaArrowLeft className="text-gray-500 cursor-pointer" />
          <FaArrowRight className="text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg w-[calc(90% - 1rem)] md:w-[calc(95% - 1rem)]">
            {/* Adjusted width to approximately 66% for both base and medium screens */}
            <h3 className="text-lg font-semibold mb-2">How FDs are taxed</h3>
            <p className="text-gray-700">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a className="text-blue-500 mt-2 inline-block">Read more...</a>
          </div>
        ))}
      </div>
      <div className="mt-4"> {/* Space below cards */}
        {/* Placeholder for additional content or layout */}
      </div>
    </div>
  );
}

export default GetAnswers;
