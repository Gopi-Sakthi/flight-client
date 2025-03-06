import React from 'react';
import Logo from './Logo';

const Header = ({ onSignOut }) => {
  return (
    <header className='flex justify-between items-center h-[4rem]'>
      <Logo />
      <div>
        <span className='bg-amber-300 text-white font-bold py-4 px-5 rounded-3xl'>G</span>
        <span className='p-2 cursor-pointer' onClick={onSignOut}>Logout</span>
      </div>
    </header>
  );
};

export default Header;
