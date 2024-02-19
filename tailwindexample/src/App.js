
import React, { useState } from 'react';
import './App.css';

import img1 from './images/download.jpg';
import img2 from './images/images.png';

const MultiPageWebsite = () => {
  const [currentPage, setCurrentPage] = useState('Angular');

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className='container'>
      <nav className="bg-blue-900 text-white h-6">
          <ul className="flex  mt-20 space-x-80 px-40 ...">
            <li className='hover:text-black' onClick={() => navigateToPage('Angular')}><i>Angular</i></li>
            <li className='hover:text-black' onClick={() => navigateToPage('React')}><i>React</i></li>
            <li className='hover:text-black' onClick={() => navigateToPage('UI')}><i>UI</i></li>
          </ul>
      </nav>
      <div className='mt-6'>
        {currentPage === 'Angular' && (
          <div className='content-container'>
            <img className='image' src={img1} alt="Angular Image" />
            <div className='text-content'>
            <p>Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality.</p>
            </div>
          </div>
        )}

        {currentPage === 'React' && (
          <div className='content-container'>
            <img className='image' src={img2} alt="React Image" />
            <div className='text-content'>
              <p>Easy creation of dynamic applications: 
               web applications because it requires less coding and
                .</p>
            </div>
          </div>
        )}

        {currentPage === 'UI' && (
          <div className='content-container'>
            <img className='image' src={img1} alt="UI Image" />
            <div className='text-content'>
              <p>User Interface UI Design focuses on anticipating what users might need to do and ensuring that the interface has 
                 </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiPageWebsite;
