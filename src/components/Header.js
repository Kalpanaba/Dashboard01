import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow mb-6">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-4" />
        <h1 className="text-2xl font-semibold">Welcome, Johan Paul</h1>
      </div>
      <div className="flex items-center">
        <nav className="mr-4">
          <a href="#" className="text-gray-700 mx-2">Dashboard</a>
          <a href="#" className="text-gray-700 mx-2">FAQs</a>
          <a href="#" className="text-gray-700 mx-2">Support</a>
        </nav>
        <button className="p-2 bg-gray-200 rounded-full">Profile</button>
      </div>
    </header>
  );
}

export default Header;
