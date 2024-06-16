import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import TimelineCard from './TimelineCard';
import FDBankCard from './FDBankCard';
import VideoKYC from './VideoKYC';
import GetAnswers from './GetAnswers';
import PendingPayment from './PendingPayment';
import FDMaturity from './FDMaturity';

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img
            src="https://th.bing.com/th/id/OIP.Yc_umHv08x_r6XZsn1AYrwHaHa?w=171&h=171&c=7&r=0&o=5&pid=1.7"
            alt="Logo"
            className="h-13 w-13 mr-4"
          />
          <h1 className="text-2xl font-semibold">Welcome, Johan Paul</h1>
        </div>
        <div className="flex items-center relative">
          <nav className="mr-4">
            <a className="text-gray-700 mx-2">Dashboard</a>
            <a className="text-gray-700 mx-2">FAQs</a>
            <a className="text-gray-700 mx-2">Support</a>
          </nav>
          <button
            className="p-2 bg-gray-200 rounded-full flex items-center"
            onClick={toggleDropdown}
          >
            Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ml-1 ${
                showDropdown ? 'transform rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute right-10 mt-2 w-48 bg-white border rounded-lg shadow-xl">
              <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                My Profile
              </a>
              <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                My FDs
              </a>
              <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                My Transactions
              </a>
              <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Logout
              </a>
            </div>
          )}
        </div>
      </header>

      {/* First partition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PortfolioCard />
        <TimelineCard />
        {/* Placeholder for future content */}
      </div>

      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 mt-6">
        {/* Horizontal Container (70% width) */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FDBankCard
            bankName="Utkarsh Small Finance Bank"
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAb4DYQXb91WSs8DDS_Lcz5d52CxBWHJp-Q&s"
            description="Highest Interest Rate, RBI Insured"
            interestRate="9.10"
            buttonLabel="Book Now"
            bgColor="bg-purple-100"
            buttonColor="bg-purple-600"
          />
          <FDBankCard
            bankName="Bajaj Finserv"
            logo="https://companieslogo.com/img/orig/BAJAJFINSV.NS-69a58fe4.png?t=1596838048"
            description="Crisil AAA Rated, No Video KYC required"
            interestRate="8.80"
            buttonLabel="Book Now"
            bgColor="bg-blue-100"
            buttonColor="bg-blue-600"
          />
          <FDBankCard
            bankName="Shriram Finanace"
            logo="https://companieslogo.com/img/orig/SHRIRAMFIN.NS-b563e9ad.png?t=1612566643"
            description="Highest Interest Rate, RBI Insured"
            interestRate="9.10"
            buttonLabel="Book Now"
            bgColor="bg-black-200" // Adjusted Tailwind CSS class
            buttonColor="bg-black text-white" // Adjusted Tailwind CSS class
          />
          <FDBankCard
            bankName="Mahindra Finance"
            logo="https://bfsi.eletsonline.com/wp-content/uploads/2015/05/mahindra-finance.jpg"
            description="Crisil AAA Rated, No Video KYC required"
            interestRate="8.80"
            buttonLabel="Book Now"
            bgColor="bg-red-100"
            buttonColor="bg-red-600"
          />
          {/* Adjusted col-span to make it span across the full width */}
          <div className="md:col-span-2">
            <GetAnswers />
          </div>
        </div>

        {/* Vertical Container (30% width) */}
        <div className="md:col-span-3 grid grid-cols-1 gap-6">
          <VideoKYC />
          <PendingPayment />
          <FDMaturity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
