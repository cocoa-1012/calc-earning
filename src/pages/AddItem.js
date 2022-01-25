import React from 'react';
import AddForm from '../components/form/AddForm';
import bg from '../images/add-bg.png';
import overlay from '../images/bg-overlay.png';
import shape1 from '../images/shapes/add/01.png';
import shape2 from '../images/shapes/add/02.png';
import shape3 from '../images/shapes/add/03.png';
import shape4 from '../images/shapes/add/04.png';
import shape5 from '../images/shapes/add/05.png';

const AddItem = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${overlay}) ,url(${bg})`,
      }}
      className='bg-cover bg-no-repeat bg-top min-h-screen'
    >
      <div className='container mx-auto text-center'>
        <div
          className='absolute top-[50%] left-[50%] w-full px-5 xs:px-10 md:w-10/12 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 '
          style={{
            transform: 'translate(-50% , -50%)',
          }}
        >
          <h2 className='text-xl xs:text-2xl sm:text-4xl mlb:px-5 xl:px-auto xl:text-4xl text-white font-semibold'>
            PLEASE ENTER IN YOUR INFORMATION BELOW
          </h2>
          <AddForm />
        </div>
      </div>
      <div className='overlays'>
        <div className='absolute left-0 bottom-0 w-20 sm:w-16 md:w-32 mlb:w-36 lg:w-40 xl:w-auto '>
          <img src={shape1} alt='' />
        </div>
        <div className='absolute top-0 right-0 w-20 xs:w-28 sm:w-32 md:w-36 mlb:w-40 lg:w-44 xl:w-auto  '>
          <img src={shape2} alt='' />
        </div>
        <div className='absolute top-0 left-0  w-20  sm:w-24 md:w-32 mlb:w-36 lg:w-40 xl:w-auto'>
          <img src={shape3} alt='' />
        </div>
        <div
          className='absolute right-0 
            top-10 xs:top-14 md:top-20 xl:top-28
            w-10  sm:w-14 md:w-16 mlb:w-20 lg:w-24 xl:w-auto '
        >
          <img src={shape4} alt='' />
        </div>
        <div className='absolute bottom-0 right-0 w-16  sm:w-20 md:w-28 mlb:w-32 lg:w-36 xl:w-auto '>
          <img src={shape5} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AddItem;
