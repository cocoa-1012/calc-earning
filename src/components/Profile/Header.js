import React from 'react';
import shortid from 'shortid';
import './header.css';
const image =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';

const bioItems = [
  {
    id: shortid(),
    name: 'World Citizen 🌍',
  },
  {
    id: shortid(),
    name: 'New to TK follow me. ∆',
  },
  {
    id: shortid(),
    name: 'Singer',
  },
  {
    id: shortid(),
    name: 'Songwriter',
  },
  {
    id: shortid(),
    name: 'Producer ',
  },
];
const hobbyItems = [
  {
    id: shortid(),
    name: 'Fashion',
  },
  {
    id: shortid(),
    name: 'Music',
  },
  {
    id: shortid(),
    name: 'Dance',
  },
  {
    id: shortid(),
    name: 'Fitness',
  },
  {
    id: shortid(),
    name: 'Sports',
  },
];
const Header = () => {
  return (
    <div className='lg:px-20 md:w-10/12 mlb:mx-auto '>
      <div className='md:flex gap-5 items-center'>
        <div className='text-center'>
          <div className='mx-auto w-48 h-48 rounded-full overflow-hidden border-8 border-[#EB7AE5] mb-2'>
            <img src={image} alt='' className='w-full h-full object-cover' />
          </div>
          <p className='text-white text-lg font-medium text-center'>
            @Queenkiley
          </p>
        </div>
        <div>
          <h1 className='text-5xl text-white font-medium mb-3'>Queen Kiley</h1>
          <ul className='flex gap-1 flex-wrap'>
            {bioItems.map((item, index) => (
              <li
                key={item.id}
                className={`text-white text-xl lg:text-2xl ${
                  index + 1 !== bioItems.length ? 'bioSplitter' : ''
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
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
