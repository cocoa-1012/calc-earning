import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import './header.css';

const Header = ({ profilePicture, username, name, category, biography }) => {
  const [hobbyItems, setHobbyItems] = useState([]);

  useEffect(() => {
    setHobbyItems(
      Object.values(category).map((value) => {
        return { id: shortid(), name: value };
      })
    );
  }, [category]);
  return (
    <div className='lg:px-20 md:w-10/12 mlb:mx-auto '>
      <div className='md:flex gap-5 items-center'>
        <div className='text-center'>
          <div className='mx-auto w-48 h-48 rounded-full overflow-hidden border-8 border-[#EB7AE5] mb-2'>
            <img
              src={profilePicture}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <p className='text-white text-lg font-medium text-center'>
            @{username}
          </p>
        </div>
        <div>
          <h1 className='text-5xl text-white font-medium mb-3'>{name}</h1>

          <p className={`text-white text-xl lg:text-2xl`}>
            {biography || 'No Biography'}
          </p>

          <ul className='flex gap-2 flex-wrap mt-4'>
            {hobbyItems.map((item) => (
              <li
                key={item.id}
                className='bg-[#3D53F5] text-sm sm:text-base text-white px-5 py-2 rounded-full'
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
