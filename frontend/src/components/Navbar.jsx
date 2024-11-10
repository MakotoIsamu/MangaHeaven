import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { iaAuth } = useContext(AuthContext); // Use the correct variable

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Define the menu items and conditionally handle the login/logout item
  const menuItems = [
    'Manga Books',
    'Posters',
    'Action Figures',
    'Clothing',
    'Custom Order',
    'Account',
    'Cart',
    iaAuth ? 'Logout' : 'Login' // Handle auth-based menu item
  ];

  // Utility function to format the menu item into a valid URL
  const formatUrl = (item) => {
    return `/${item.trim().toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="relative">
      <nav className="w-full z-10 bg-black/60 text-white fixed top-0 left-0 flex px-4 py-2 sm:py-4 justify-between items-center">
        <button 
          onClick={handleSidebar}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <Link to="/" className="font-bold text-2xl">MANGA HEAVEN</Link>
        
        <div className="items-center gap-4 hidden sm:flex">
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none px-4 py-2 bg-gray-700/60 rounded-lg shadow-md border-none"
          />
          <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
            Search
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-20 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleSidebar}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-30 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <button
            className="flex items-center gap-2 w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg mb-4 transition-colors duration-200"
            onClick={handleSidebar}
          >
            <X className="h-6 w-6" />
            <span>Close Menu</span>
          </button>

          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link 
                to={formatUrl(item)} 
                key={index}
                onClick={handleSidebar}
                className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 rounded-lg transition-colors duration-200 block"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
