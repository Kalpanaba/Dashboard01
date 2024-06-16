import React from 'react';

const Header = () => {
  const logoUrl = 'https://st3.depositphotos.com/32211788/35507/v/450/depositphotos_355077834-stock-illustration-letter-logo-icon-design-template.jpg';

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md mb-4">
      <div className="flex items-center">
        <img src={logoUrl} alt="Logo" className="h-2 w-2 object-contain" />
        <h1 className="text-lg font-semibold">Welcome, Johan Paul</h1>
      </div>
      <div className="flex items-center">
        <nav className="hidden md:flex mr-4">
          <a href="#" className="text-gray-700 mx-2">Dashboard</a>
          <a href="#" className="text-gray-700 mx-2">FAQs</a>
          <a href="#" className="text-gray-700 mx-2">Support</a>
        </nav>
        <button className="p-2 bg-gray-200 rounded-full md:hidden">Profile</button>
        <button className="p-2 bg-gray-200 rounded-full hidden md:block">Profile</button>
      </div>
    </header>
  );
}

export default Header;
