import React from 'react';
//import Card from './Card';

const TimelineCard = () => {
    const fdData = [
        { name: 'Bajaj Finserv FD', start: 'January 2024', end: 'July 2025' },
        { name: 'Mahindra Finance FD', start: 'June 2024', end: 'June 2025' },
        { name: 'Utkarsh Small Finance Bank FD', start: 'January 2024', end: 'April 2025' },
        { name: 'Shriram Finance Bank FD', start: 'June 2024', end: 'June 2025' }
    ];

    const calculateWidth = (startDate, endDate) => {
        const totalMonths = 18;
        const startMonth = convertDateToMonths(startDate);
        const endMonth = convertDateToMonths(endDate);
        const width = ((endMonth - startMonth) / totalMonths) * 100 + '%';
        return width;
    };

    const convertDateToMonths = (dateString) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const [month, year] = dateString.split(' ');
        const monthIndex = months.indexOf(month);
        const yearDiff = parseInt(year) - 2024;
        return yearDiff * 12 + monthIndex;
    };

    return (
        <div  className="bg-white p-6 rounded-lg shadow col-span-2 flex flex-col ">
            <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold mb-4 ">FD Maturity Timeline</h2> </div>
            <div className="flex flex-col space-y-4">
            {fdData.map((fd, index) => (
  <div key={index} className="flex items-center">
    <div className="flex-1 h-4 relative bg-gray-200">
      <div className="absolute left-0 top-0 h-4 bg-blue-500" style={{
        width: calculateWidth(fd.start, fd.end)
      }}>
        <div className="text-xs text-white px-2 truncate">{fd.name}</div>
      </div>
    </div>
  </div>
))}
            </div>
        </div>
    );
};

export default TimelineCard;
