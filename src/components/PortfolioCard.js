import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const PortfolioCard = () => {
  const items = [
    { label: 'Bajaj Finserv', amount: 20000, color: '#FF6384' },
    { label: 'Mahindra Finance', amount: 30000, color: '#36A2EB' },
    { label: 'Utkarsh Small Finance Bank', amount: 30000, color: '#FFCE56' },
    { label: 'Shriram Finance', amount: 40000, color: '#4BC0C0' },
  ];

  const [selectedItem, setSelectedItem] = useState('All');

  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

  const data = selectedItem === 'All' ? {
    labels: items.map(item => item.label),
    datasets: [
      {
        data: items.map(item => item.amount),
        backgroundColor: items.map(item => item.color),
        hoverBackgroundColor: items.map(item => item.color),
      },
    ],
  } : {
    labels: [selectedItem],
    datasets: [
      {
        data: [items.find(item => item.label === selectedItem).amount],
        backgroundColor: [items.find(item => item.label === selectedItem).color],
        hoverBackgroundColor: [items.find(item => item.label === selectedItem).color],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const percentage = selectedItem === 'All' ? '' : 
    ((items.find(item => item.label === selectedItem).amount / totalAmount) * 100).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your FD Portfolio</h2>
        <select
          className="p-2 border rounded"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          <option value="All">All</option>
          {items.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <div className="w-48 h-48">
          <Pie data={data} options={options} />
        </div>
        <div className="ml-4">
          <div className="flex flex-col space-y-2 mb-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          {selectedItem !== 'All' && (
            <p className="mt-4 text-lg">
              {selectedItem}: {items.find(item => item.label === selectedItem).amount} ({percentage}%)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
