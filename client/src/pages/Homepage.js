import React from 'react';
import { Work } from '@mui/icons-material';
import interviewImage from "../assets/Interview.png"
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/register');
  };
  return (
    <>
      <div className='bg-white max-h-[90vh] h-[80vh] flex items-center justify-center overflow-x-hidden'>
        <div className='text-center'>
          <h1 className='text-7xl font-bold mb-4'>Ace Your Interview</h1>
          <p className='text-lg mb-8'>Prepare and practice to land your dream job.</p>
          <div className='flex justify-center space-x-4'>
          <button
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none'
              onClick={handleSignUpClick}>
              Sign Up
            </button>
            <button className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none' onClick={handleSignUpClick}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Feature boxes */}
      <div className='bg-purple-400 h-[100vh] p-8 flex items-center justify-center overflow-x-hidden'>
        <div className='text-center'>
          <h2 className='font-bold text-3xl mb-10 text-cyan-50'>FEATURES</h2>
          <h3 className='font-bold text-2xl mb-5 text-cyan-50'>Enhance Your Interview Skills with Our Features</h3>
          <h3 className='font-bold text-2xl mb-5 text-cyan-50'>Practice, improve, and succeed in your interviews with our comprehensive set of features.</h3>
          <div className='grid grid-cols-2 gap-10 mt-10'>
            <div className='bg-white rounded-lg p-4 shadow-lg flex'>
              {/* Icon */}
              <div className='ml-4 mt-4 text-gray-700'>
                <Work style={{ fontSize: '3rem' }} />
              </div>
              {/* Content */}
              <div className="ml-4 mt-4 text-gray-800">
                <div className="font-bold text-3xl">Practice with Real Interview Questions</div>
                <div className='mt-2'>Get access to a wide range of real interview questions from top companies to practice and improve your skills.</div>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-lg flex'>
              {/* Icon */}
              <div className='ml-4 mt-4 text-gray-700'>
                <Work style={{ fontSize: '3rem' }} />
              </div>
              {/* Content */}
              <div className="ml-4 mt-4 text-gray-800">
                <div className="font-bold text-3xl">Mock Interviews</div>
                <div className='mt-2'>Receive detailed feedback on your mock interviews, highlighting areas of improvement and strengths.</div>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-lg flex'>
              {/* Icon */}
              <div className='ml-4 mt-4 text-gray-700'>
                <Work style={{ fontSize: '3rem' }} />
              </div>
              {/* Content */}
              <div className="ml-4 mt-4 text-gray-800">
                <div className="font-bold text-3xl">Customizable Interview Settings</div>
                <div className='mt-2'>Adjust the difficulty level, interview duration, and question types to tailor your practice sessions to your needs.</div>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-lg flex'>
              {/* Icon */}
              <div className='ml-4 mt-4 text-gray-700'>
                <Work style={{ fontSize: '3rem' }} />
              </div>
              {/* Content */}
              <div className="ml-4 mt-4 text-gray-800">
                <div className="font-bold text-3xl">Track Your Progress</div>
                <div className='mt-2'>Monitor your performance over time with detailed analytics and insights to track your improvement.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white h-[100vh] p-4 flex items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center md:items-start w-full max-w-6xl'>
          {/* Left Section */}
          <div className='md:w-1/2 p-4 ml-4'>
            <h1 className='font-bold text-4xl mb-4'>Ace Your Interview: Our Platform Helps Users Secure Dream Jobs</h1>
            <p className='text-lg'>Discover how InterViewPrepHub helps users perfect their interview skills, providing a platform for mock interview practice and personalized feedback to help them secure their dream jobs.</p>
          </div>

          {/* Right Section */}
          <div className='md:w-1/2 p-4 flex justify-center'>
            <img src={interviewImage} alt='Interview' className='max-w-150 h-auto rounded-lg' />
          </div>
        </div>
      </div>

      {/* second last section */}
      <div className='bg-white max-h-[90vh] h-[50vh] flex items-center justify-center overflow-x-hidden'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mb-4'>Improve Your Interview Skills</h1>
          <p className='text-lg mb-8'>Prepare for your dream job by practicing mock interviews with real-time feedback. Our platform offers a simulated interview experience to help you succeed.</p>
          <div className='flex justify-center space-x-4'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none'>
              Learn More
            </button>
          </div>
        </div>
      </div>


    </>
  );
}

export default Homepage;
