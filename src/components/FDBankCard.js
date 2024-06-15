import React from 'react';

const FDBankCard = ({ bankName, description, interestRate, buttonLabel, bgColor, buttonColor, logo }) => {
  return (
    <div className={`p-6 rounded-lg shadow ${bgColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {logo && (
            <img src={logo} alt="Bank Logo" className="w-1/3 h-16 object-contain mr-4" />
          )}
          <div>
            <h3 className="text-lg font-semibold">{bankName}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-600">Interest Up to {interestRate}% p.a</p>
          </div>
        </div>
        <button className={`p-2 rounded ${buttonColor} text-white`}>{buttonLabel}</button>
      </div>
    </div>
  );
}

export default FDBankCard;
