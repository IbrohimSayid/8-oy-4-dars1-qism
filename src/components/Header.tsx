import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <i className="pi pi-arrow-left"></i>
          </button>
          <h2 className="text-xl font-semibold">Account verification</h2>
        </div>
        <div>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">In progress</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
