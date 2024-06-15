import React from 'react';

const TimelineCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow col-span-2 flex flex-col items-center">
         <h2 className="text-lg font-semibold mb-4">FD Maturity Timeline</h2>
      <img 
        src="https://cdn2.etrade.net/1/22111512090.0/aempros/content/dam/etrade/retail/en_US/images/knowledge/library/bonds-cds/bondladder-info-graphic-reinvestment.png" 
        alt="Timeline" 
        className="object-contain h-60 w-full mb-2"
      />
     
      {/* Additional content can be added here if needed */}
    </div>
  );
}

export default TimelineCard;
