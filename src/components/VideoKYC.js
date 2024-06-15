import React from 'react';

const VideoKYC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Video KYC</h2>
        <div className="flex items-center mb-2">
          <div className="relative bg-red-500 rounded-lg p-2">
            <p className="text-white font-bold text-xl">28</p>
          </div>
          <div className="ml-2">
            <p className="text-gray-600">Oct, 2023</p>
          </div>
        </div>
        <p>Deposit Amt: <strong>Rs. 20,000</strong></p>
        <p>Tenure: <strong>2 Years</strong></p>
        <p>Interest Rate: <strong>9.10%</strong></p>
      </div>
      <div className="flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Complete Now</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Reschedule</button>
      </div>
    </div>
  );
}

export default VideoKYC;
