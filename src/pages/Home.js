import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useInnerHeight } from '../hooks/useInnerHeight';
import overlay from '../images/bg-overlay.png';
import bg from '../images/home-bg.png';
import img1 from '../images/icons/icon-1.png';
import shape1 from '../images/shapes/shape-01.png';
import shape2 from '../images/shapes/shape-02.png';
import shape3 from '../images/shapes/shape-03.png';
import shape4 from '../images/shapes/shape-04.png';
import shape5 from '../images/shapes/shape-05.png';
import routes from '../routes';
import useStyles from '../styles/mainDivStyle';

const Home = () => {
  const contentHeight = useInnerHeight();
  const [height, setHeight] = useState(0);
  const [searchParam] = useSearchParams();

  useEffect(() => {
    if (searchParam.get('error')) {
      toast.error(searchParam.get('error'), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    }
  }, [searchParam]);
  useEffect(() => {
    setHeight(contentHeight);
  }, [contentHeight]);
  const classes = useStyles(height);
  return (
    <div
      style={{
        backgroundImage: `url(${overlay}) ,url(${bg})`,
      }}
      className={`bg-cover bg-center md:overflow-hidden ${classes.main}`}
    >
      <motion.div
        className='container mx-auto text-center'
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div
          className='absolute top-[50%] left-[50%] w-full'
          style={{
            transform: 'translate(-50% , -50%)',
          }}
        >
          <motion.div
            className='mb-10'
            initial={{ y: 0 }}
            exit={{ y: '-15vh' }}
            transition={{ duration: 1 }}
          >
            <div className={classes.imageContainer}>
              <div className='flex justify-center items-center'>
                <img src={img1} alt='' />
              </div>
              <p className='uppercase text-xl sm:text-2xl font-bold text-white font-dm-sans  mt-10'>
                INFLUENCER CALCULATOR
              </p>
            </div>
            <motion.h1 className='home-title leading-1-2'>
              check how much <br /> you can earn
            </motion.h1>
            <motion.span className='inline-block'>
              <Link
                to={routes.add}
                className='mt-16 inline-block md:text-xl btn btn-outline-white font-dm-sans font-bold'
              >
                Get Started
              </Link>
            </motion.span>
            <p className='text-sm text-white font-dm-sans font-bold mt-20 px-4 sm:px-10 md:px-0'>
              By using this calculator you agree to recieve email notification
              regarding Shoutsy App launch. We won’t spam.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className='overlays'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute right-0 bottom-0 home-shape lea'>
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
      </motion.div>
    </div>
  );
};

export default Home;
