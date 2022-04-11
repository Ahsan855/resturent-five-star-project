import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className="bg-[#4b4e55] sticky top-0 px-10 py-6 flex items-center justify-between">
      <div>
        <h1 className="font-mono italic text-white text-xl border-2 p-2 rounded-lg">Ahsan Habib</h1>
      </div>
      <div className="flex gap-6 text-xl items-center">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink className='border-2 rounded-lg py-2 px-4 hover:bg-[#292a2d] text-white' to='/button'>Login</CustomLink>
      </div>
    </div>
    );
};

export default Header;