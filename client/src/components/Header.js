// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/email');
  };

  const handleSignup = () => {
    navigate('/register');
  };
  const handleHome = () => {
    navigate('/email');
  };

  return (
    <div className='bg-slate-200 w-screen h-10 overflow-x-hidden flex items-center justify-between'>
      <div className="font-bold ml-8 cursor-pointer" onClick={handleHome}>InterviewPrepHub</div>
      <div className="font-semibold cursor-pointer" onClick={handleHome}>Home</div>
      <div className="font-semibold cursor-pointer">Practice Interview</div>
      <div className="font-semibold cursor-pointer">Interview Tips</div>
      <div className="font-semibold cursor-pointer" onClick={handleLogin}>Login</div>
      <div className="font-semibold mr-9 cursor-pointer">
        <button className="bg-blue-500 text-white py-1 px-3 rounded-full" onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Header;
