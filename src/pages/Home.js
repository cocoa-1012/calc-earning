import React from 'react';
import { Link } from 'react-router-dom';
import overlay from '../images/bg-overlay.png';
import bg from '../images/home-bg.png';
import img1 from '../images/icons/icon-1.png';
import shape1 from '../images/shapes/shape-01.png';
import shape2 from '../images/shapes/shape-02.png';
import shape3 from '../images/shapes/shape-03.png';
import shape4 from '../images/shapes/shape-04.png';
import shape5 from '../images/shapes/shape-05.png';
import routes from '../routes';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${overlay}) ,url(${bg})`,
      }}
      className='bg-cover bg-center min-h-screen'
    >
      <div className='container mx-auto text-center'>
        <div
          className='absolute top-[50%] left-[50%] w-full'
          style={{
            transform: 'translate(-50% , -50%)',
          }}
        >
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <img src={img1} alt='' />
            </div>
            <p className='uppercase text-xl sm:text-2xl font-semibold text-white mt-10'>
              INFLUENCER CALCULATOR
            </p>
          </div>
          <h1 className='home-title'>check how much you can earn</h1>
          <Link
            to={routes.add}
            className='mt-16 inline-block md:text-xl btn btn-outline-white'
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className='overlays'>
        <div className='absolute right-0 bottom-0 home-shape'>
          <img src={shape1} alt='' />
        </div>
        <div className='absolute top-6 left-0 home-shape'>
          <img src={shape2} alt='' />
        </div>
        <div className='absolute top-0 right-0 home-shape'>
          <img src={shape3} alt='' />
        </div>
        <div className='absolute bottom-0 left-5 home-shape'>
          <img src={shape4} alt='' />
        </div>
        <div className='absolute bottom-0 right-5 lg:right-12  home-shape'>
          <img src={shape5} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;
