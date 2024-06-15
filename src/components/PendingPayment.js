import React from 'react';

const PendingPayment = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-2">Pending Payment</h2>
      <div className="flex items-center mb-2">
        <div className="relative bg-red-500 rounded-lg p-2">
          <p className="text-white font-bold text-xl">30</p>
        </div>
        <div className="ml-2">
          <p className="text-gray-600">Oct, 2023</p>
        </div>
      </div>
      <div className="mb-2">
        <p>Deposit Amt: <strong>Rs. 25,000</strong></p>
        <p>Tenure: <strong>18 Months</strong></p>
        <p>Interest Rate: <strong>8.10%</strong></p>
      </div>
      <div className="flex">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Pay Now</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel Application</button>
      </div>
    </div>
  );
}

export default PendingPayment;
