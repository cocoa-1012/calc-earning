import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Footer from '../components/Profile/Footer';
import Header from '../components/Profile/Header';
import ResultItems from '../components/resultItems/ResultItems';
import { useInnerSize } from '../hooks/useInnerSize';
import overlay from '../images/bg-overlay-2.png';
import bg from '../images/result-bg.png';
import shape1 from '../images/shapes/result/01.png';
import shape2 from '../images/shapes/result/02.png';
import shape3 from '../images/shapes/result/03.png';
import shape4 from '../images/shapes/result/04.png';
import shape5 from '../images/shapes/result/05.png';
import shape6 from '../images/shapes/result/06.png';
import routes from '../routes';

const useStyles = createUseStyles({
  main: (size) => {
    const heightData = (width, height) => {
      if (height < 768 && width > 768) {
        return height + 400;
      }
      if (width < 768) {
        if (height > 900) {
          return height + 950;
        }
        if (height > 768) {
          return height + 1050;
        }
        if (height > 600) {
          return height + 1250;
        }
        return height + 1500;
      }
      if (768 <= width && width <= 830) {
        return height + 500;
      }

      return height;
    };
    return {
      height: heightData(size.width, size.height) + 250,
      overflow: 'hidden',
      paddingTop: 100,
      position: 'relative',
    };
  },
});

const Result = () => {
  const data = useSelector((state) => {
    if (Object.keys(state.data).length !== 0) {
      return state.data;
    }
    return {};
  });

  const windowSize = useInnerSize();
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(windowSize);
  }, [windowSize]);
  const classes = useStyles(size);
  const [count, setCount] = useState(4);
  if (Object.keys(data).length === 0) {
    return <Navigate to={routes.add} />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${overlay}) ,url(${bg})`,
      }}
      className={`bg-cover bg-center md:overflow-hidden ${classes.main}`}
    >
      <div className='container mx-auto'>
        <div className='lg:absolute lg:top-[50%] lg:left-[50%] w-full px-0 md:px-5 xs:px-10 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 resultPageWrapper'>
          <motion.div>
            <Header countAnimationDelay={setCount} />
            <ResultItems count={count} setCount={setCount} />
            <Footer count={count} />
          </motion.div>
        </div>
      </div>
      <motion.div
        className='overlays'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute left-0 bottom-0 w-12 xs:w-16 lg:w-20 xl:w-auto '>
          <img src={shape1} alt='' />
        </div>
        <div className='absolute top-0 right-0 w-24 xs:w-28 sm:w-36 md:w-40 mlb:w-44 lg:w-48 xl:w-auto  '>
          <img src={shape2} alt='' />
        </div>
        <div className='absolute top-0 left-0  w-20  sm:w-24 md:w-32 mlb:w-36 lg:w-40 xl:w-auto'>
          <img src={shape3} alt='' />
        </div>
        <div
          className='absolute right-0 
            top-10 xs:top-14 md:top-20 xl:top-28
            w-10  sm:w-14 md:w-16 mlb:w-20 lg:w-24 xl:w-auto'
        >
          <img src={shape4} alt='' />
        </div>
        <div className='absolute bottom-0 right-0 w-16  sm:w-20 md:w-28 mlb:w-32 lg:w-36 xl:w-auto '>
          <img src={shape5} alt='' />
        </div>
        <div className='absolute top-11 md:top-24 md:hidden mlb:block left-0 w-12  sm:w-20 md:w-28 mlb:w-32 lg:w-36 xl:w-auto '>
          <img src={shape6} alt='' />
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
