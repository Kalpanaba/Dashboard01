import React from 'react';

const PortfolioCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center">
      <img src="https://www.meta-chart.com/assets/images/pie/pie_percent.png" alt="Portfolio" className="w-1/3 h-48 object-cover mr-4" />
      <div>
        <h2 className="text-lg font-semibold mb-4">Your FD Portfolio</h2>
        <div className="flex flex-col space-y-2">
          <span>Bajaj Finserv</span>
          <span>Mahindra Finance</span>
          <span>Utkarsh Small Finance Bank</span>
          <span>Shriram Finance</span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
