import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">BannerBot</div>
        <div className="flex items-center space-x-6">
          <a href="#how-to-use" className="text-white text-lg">How to use?</a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
